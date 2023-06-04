package com.ssd.ssd.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.ssd.ssd.entity.LoginUsuarioEntity;
import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.entity.factory.UsuarioEntityFactory;
import com.ssd.ssd.enumerator.PerfilEnum;
import com.ssd.ssd.exception.DadosJaCadastradosException;
import com.ssd.ssd.exception.MsgException;
import com.ssd.ssd.exception.NaoAutorizadoException;
import com.ssd.ssd.exception.NaoEncontradoException;
import com.ssd.ssd.exception.ParametroInvalidoException;
import com.ssd.ssd.repository.LoginUsuarioRepository;
import com.ssd.ssd.repository.UsuarioRepository;
import com.ssd.ssd.vo.UsuarioVO;
import com.ssd.ssd.vo.factory.UsuarioVOFactory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {
	
	private final LoginUsuarioRepository usuarioLoginRepository;
	private final UsuarioRepository usuarioRepository;
	
	private static final String EMAIL_JA_CADASTRADO = " Já existe usuário cadastrado com esse email ";
	private static final String CPF_JA_CADASTRADO = " Já existe usuário cadastrado com esss CPF ";
	private static final String DIGITOS_CPF_INVALIDO = " Dígitos CPF inválidos";
//	private static final String SENHA_INVALIDO = " Senha inválida ";
//	private static final String EMAIL_INVALIDO = " Digite um email válido ";
	private static final String USUARIO_NAO_AUTORIZADO = "Usuário não autorização para esta requesição";
	
	@Transactional
	public UsuarioVO cadastrar(UsuarioVO usuario) {
		
		validarSenhaConfirmada(usuario.getSenha(), usuario.getSenhaConfirmada());
		
		/*Boolean validPassword = isValidPassword(usuario.getSenha());
		
		if(!Objects.equals(Boolean.TRUE.toString(), validPassword.toString())) {
			throw new MsgException(SENHA_INVALIDO);
		}*/
		Optional<UsuarioEntity> optionalByCpf = usuarioRepository.findByCpf(usuario.getCpf());
		if(optionalByCpf.isPresent()) {
			throw new DadosJaCadastradosException(CPF_JA_CADASTRADO);
		}
		Optional<UsuarioEntity> optionalByEmail = usuarioRepository.findByEmail(usuario.getEmail());
		if(optionalByEmail.isPresent()) {
			throw new DadosJaCadastradosException(EMAIL_JA_CADASTRADO);
		}
		
		UsuarioEntity usuarioEntity = UsuarioEntityFactory.converterParaEntity(usuario);
		
		usuarioRepository.save(usuarioEntity);

		return UsuarioVOFactory.converterParaVO(usuarioEntity);
	}

	public UsuarioVO recuperar(Long id) {

		UsuarioEntity usuarioBanco = recuperarUsuario(id);

		return UsuarioVOFactory.converterParaVO(usuarioBanco);
	}

	UsuarioEntity recuperarUsuario(Long id) {

		return usuarioRepository.findById(id)
				.orElseThrow(() -> new NaoEncontradoException("Usuario não encontrado " + id));
	}
	
	public UsuarioVO recuperarPorCpf(String cpf) {

//		LoginUsuarioEntity usuarioLogado = recuperarUsuarioLogadoPorToken(token);
//		
//		if(!usuarioLogado.getUsuario().getPerfil().equals(PerfilEnum.PRODUCT_OWNER)) {
//			throw new NaoAutorizadoException(USUARIO_NAO_AUTORIZADO);
//		}
		validarCpf(cpf);

		UsuarioEntity usuarioByCpf = usuarioRepository.findByCpf(cpf)
				.orElseThrow(() -> new NaoEncontradoException("Usuário com " + cpf + " não encontrado"));

		return UsuarioVOFactory.converterParaVO(usuarioByCpf);
	}
	
	private void validarCpf(String cpf) {
		
		if(cpf.length() != 11) {
			throw new ParametroInvalidoException(DIGITOS_CPF_INVALIDO);
		}
	}

	public UsuarioVO recuperarPorToken(String token) {
		
		LoginUsuarioEntity usuarioLogado = recuperarUsuarioLogadoPorToken(token);
		
//		byte[] senhaDecodificada = Base64.getUrlDecoder().decode(usuarioLogado.getUsuario().getSenha());
//		byte[] senhaConfirmadaDecodificada = Base64.getUrlDecoder().decode(usuarioLogado.getUsuario().getSenhaConfirmada());
		
		return UsuarioVO.builder()
				.id(usuarioLogado.getUsuario().getId())
				.nomeCompleto(usuarioLogado.getUsuario().getNome())
				.email(usuarioLogado.getUsuario().getEmail())
				.cpf(usuarioLogado.getUsuario().getCpf())
				.dataNascimento(usuarioLogado.getUsuario().getDataNascimento())
				.perfil(usuarioLogado.getUsuario().getPerfil())
//				.senha(Arrays.toString(senhaDecodificada))
//				.senhaConfirmada(Arrays.toString(senhaConfirmadaDecodificada))
				.status(usuarioLogado.getUsuario().getStatus())
				.build();
	}
	
	private LoginUsuarioEntity recuperarUsuarioLogadoPorToken(String token) {

		return usuarioLoginRepository.findByLogadoToken(token)
				.orElseThrow(() -> new NaoEncontradoException("Usuário não encontrado"));
	}

	public List<UsuarioVO> listarUsuarios(String token) {
		
		LoginUsuarioEntity usuariosLogado = recuperarUsuarioLogadoPorToken(token);
		
		if(!usuariosLogado.getUsuario().getPerfil().equals(PerfilEnum.PRODUCT_OWNER)
				&& !usuariosLogado.getUsuario().getPerfil().equals(PerfilEnum.SCRUM_MASTER) ) {
			throw new NaoAutorizadoException(USUARIO_NAO_AUTORIZADO);
		}
		List<UsuarioEntity> usuarios = usuarioRepository.findUsuarios();

		if (usuarios.isEmpty()) {
			throw new NaoEncontradoException("Usuários nao encontrados");
		}
		return UsuarioVOFactory.converterParaList(usuarios);
	}
	
	@Transactional
	public UsuarioVO alterar(UsuarioVO usuario) {
		
		validarSenhaConfirmada(usuario.getSenha(), usuario.getSenhaConfirmada());
		UsuarioEntity usuarioBanco = recuperarUsuario(usuario.getId());
		
		usuarioBanco.setDataNascimento(usuario.getDataNascimento());
		usuarioBanco.setNome(usuario.getNomeCompleto());
		usuarioBanco.setEmail(usuario.getEmail());
		usuarioBanco.setPerfil(usuario.getPerfil());
//		usuarioBanco.setSenha(Encrypt.getHash(usuario.getSenha()));
//		usuarioBanco.setSenhaConfirmada(Encrypt.getHash(usuario.getSenhaConfirmada()));
		
		usuarioRepository.save(usuarioBanco);

		return UsuarioVOFactory.converterParaVO(usuarioBanco);
	}
	
	/*@Transactional
	public UsuarioVO ativarCadastro(String token, Long idUsuario) {

		LoginUsuarioEntity usuarioLogado = recuperarUsuarioLogadoPorToken(token);
		
		if(!usuarioLogado.getUsuario().getPerfil().equals(PerfilEnum.PRODUCT_OWNER)) {
			throw new NaoAutorizadoException(USUARIO_NAO_AUTORIZADO);
		}
		
		UsuarioEntity usuarioBanco = recuperarUsuario(idUsuario);

		usuarioBanco.setStatus(StatusEnum.ATIVO);

		usuarioRepository.save(usuarioBanco);

		return UsuarioVOFactory.converterParaVO(usuarioBanco);
	}*/
	
	public static Boolean isValidPassword(String password){
		  
        // Regex to check valid password.
        String regex = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])"
                + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,20}$";
  
        // Compile the ReGex
        Pattern p = Pattern.compile(regex);
  
        // If the password is empty // return false
        if (password == null) {
            return false;
        }
        // Pattern class contains matcher() method // to find matching between given password // and regular expression.
        Matcher m = p.matcher(password);
  
        // Return if the password // matched the ReGex
        return m.matches();
    }
	
	private void validarSenhaConfirmada(String senha, String senhaConfirmada) {

		if (!Objects.equals(senha, senhaConfirmada)) {
			throw new MsgException("Senha diferentes");
		}
	}

	public UsuarioVO recuperarUsuarioDevProdutOwner(String cpf) {
		
		validarCpf(cpf);
		
		UsuarioEntity usuarioByCpf = usuarioRepository.findUsurioPefilDevProdutOwner(cpf, PerfilEnum.DEVELOPER, PerfilEnum.PRODUCT_OWNER)
				.orElseThrow(() -> new NaoEncontradoException("Usuário com " + cpf + " não encontrado"));
		
		return UsuarioVO.builder()
				.id(usuarioByCpf.getId())
				.nomeCompleto(usuarioByCpf.getNome())
				.perfil(usuarioByCpf.getPerfil())
				.build();
	}
	
}
