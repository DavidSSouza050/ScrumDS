package com.ssd.ssd.service;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.ssd.ssd.entity.LoginUsuarioEntity;
import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.exception.NaoAutorizadoException;
import com.ssd.ssd.exception.NaoEncontradoException;
import com.ssd.ssd.repository.LoginUsuarioRepository;
import com.ssd.ssd.repository.UsuarioRepository;
import com.ssd.ssd.utils.Encrypt;
import com.ssd.ssd.vo.LoginVO;

import lombok.Generated;
import lombok.RequiredArgsConstructor;

@Generated
@Service
@RequiredArgsConstructor
public class LoginService {
	
	private static final String USUARIO_OU_SENHA_INVALIDO = "Usuário ou senha inválido";
//	private static final String USUARIO_NAO_ENCONTRADO = "Usuário não encontrado";
	
	private final UsuarioRepository usuarioRepository;
	private final LoginUsuarioRepository loginUsuarioRepository;
	
	public String login(LoginVO login) {
		
		UsuarioEntity usuario = usuarioRepository.findByCpf(login.getCpf())
				.orElseThrow(() -> new NaoEncontradoException("Usuario com "+ login.getCpf() + " não encontrado"));
		
		String senhaCodificada = Encrypt.getHash(login.getSenha());
		
		if(!Objects.equals(usuario.getSenha(), senhaCodificada)  || 
				!Objects.equals(usuario.getCpf(), login.getCpf())) {
			throw new NaoAutorizadoException(USUARIO_OU_SENHA_INVALIDO);
		}
		validarStatusParaLogar(usuario);
		LoginUsuarioEntity loginEntity = registrarLoginUsuario(usuario);
		loginUsuarioRepository.save(loginEntity);
			
		return loginEntity.getToken();
	}

	private LoginUsuarioEntity registrarLoginUsuario(UsuarioEntity usuario) {
		
		return LoginUsuarioEntity.builder()
				.usuario(usuario)
				.token(UUID.randomUUID().toString())
				.dataHora(LocalDateTime.now())
				.build();
	}
	
	private void validarStatusParaLogar(UsuarioEntity usuario) {

		/*if (!Objects.equals(usuario.getStatus().toString(), StatusEnum.ATIVO.toString())) {
			throw new MsgException("Login não permitido para usuário com status do cadastro pendente");
		}*/
	}

}
