package com.ssd.ssd.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ssd.ssd.entity.ClienteSolicitanteEntity;
import com.ssd.ssd.entity.LoginUsuarioEntity;
import com.ssd.ssd.entity.ProjetoEntity;
import com.ssd.ssd.entity.TimeScrumEntity;
import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.entity.factory.ClienteSolicitanteEntityFactory;
import com.ssd.ssd.entity.factory.ProjetoEntityFactory;
import com.ssd.ssd.enumerator.PerfilEnum;
import com.ssd.ssd.enumerator.SituacaoEnum;
import com.ssd.ssd.exception.MsgException;
import com.ssd.ssd.exception.NaoEncontradoException;
import com.ssd.ssd.repository.ClienteSolicitanteRepository;
import com.ssd.ssd.repository.ProjetoRepository;
import com.ssd.ssd.repository.TimeScrumRespository;
import com.ssd.ssd.vo.ProjetoVO;
import com.ssd.ssd.vo.TimeScrumVO;
import com.ssd.ssd.vo.factory.ProjetoVOFactory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjetoService {
	
	private final ProjetoRepository projetoRepository;
	private final TimeScrumRespository timeScrumRespository;
	private final ClienteSolicitanteRepository clienteSolicitanteRepository;
	
	private final UsuarioService usuarioService;
	
	public ProjetoVO cadastrar(ProjetoVO projetoVO) {
		
		validarCpfCnpjCliente(projetoVO.getCliente().getCpfCnpj());
		
		UsuarioEntity usuarioProduct = usuarioService.recuperarUsuario(projetoVO.getIdProductOwner());
		
		if(usuarioProduct.getPerfil() != PerfilEnum.PRODUCT_OWNER) {
			throw new MsgException("A criação do projeto é permitido pelo usuário Product Owner");
		}
		
		UsuarioEntity usuarioScrum = usuarioService.recuperarUsuario(projetoVO.getIdUsuarioScrum());
		
		ClienteSolicitanteEntity cliente = ClienteSolicitanteEntityFactory.converterParaVO(projetoVO.getCliente());
		
		ProjetoEntity projetoEntity = ProjetoEntityFactory.converterParaEntity(projetoVO, usuarioScrum, cliente, usuarioProduct);
		
		projetoEntity = projetoRepository.save(projetoEntity);
		
		gravarListaDesenvolvidores(projetoEntity, projetoVO.getTimes());
		
		return ProjetoVO.builder()
				.id(projetoEntity.getId())
				.build();
	}
	
	public ProjetoVO atualizar(ProjetoVO projetoVO) {

		validarCpfCnpjCliente(projetoVO.getCliente().getCpfCnpj());
		
		validarStatus(projetoVO.getStatus());
		UsuarioEntity usuarioProduct = usuarioService.recuperarUsuario(projetoVO.getIdProductOwner());

		if (usuarioProduct.getPerfil() != PerfilEnum.PRODUCT_OWNER) {
			throw new MsgException("A criação do projeto é permitido pelo usuário Product Owner");
		}
		
		ProjetoEntity projetoBanco = recuperarProjetoPorId(projetoVO.getId());

		UsuarioEntity usuarioScrum = usuarioService.recuperarUsuario(projetoVO.getIdUsuarioScrum());

		ClienteSolicitanteEntity clienteSolicitanteBanco =  recuperarClienteSolicitante(projetoBanco.getCliente().getId());
		clienteSolicitanteBanco.setNome(projetoVO.getCliente().getNome());
		clienteSolicitanteBanco.setCpfCnpj(projetoVO.getCliente().getCpfCnpj());
		clienteSolicitanteBanco.setDataCadastro(LocalDateTime.now());
		clienteSolicitanteBanco.setTelefone(projetoVO.getCliente().getTelefone());
		clienteSolicitanteBanco.setEmail(projetoVO.getCliente().getEmail());
		clienteSolicitanteBanco.setRamoAtividade(projetoVO.getCliente().getRamoAtividade());
		
		projetoBanco.setNome(projetoVO.getNome());
		projetoBanco.setStatus(projetoVO.getStatus());
		projetoBanco.setDescricao(projetoVO.getDescricao());
		projetoBanco.setScrumMaster(usuarioScrum);
		projetoBanco.setCliente(clienteSolicitanteBanco);
		projetoBanco.setProdutOwner(usuarioScrum);
		
		clienteSolicitanteBanco = clienteSolicitanteRepository.save(clienteSolicitanteBanco);
		projetoBanco = projetoRepository.save(projetoBanco);

		deletarListaTimes(projetoBanco);
		gravarListaDesenvolvidores(projetoBanco, projetoVO.getTimes());

		return ProjetoVO.builder().id(projetoBanco.getId()).build();
	}

	private void validarStatus(SituacaoEnum status) {
		if(status.equals(SituacaoEnum.CADASTRADO)){
			throw new MsgException("Não é permitido atualização de status para cadastrado");
		}
	}

	private ClienteSolicitanteEntity recuperarClienteSolicitante(Long id) {
		return clienteSolicitanteRepository.findById(id)
				.orElseThrow(() -> new NaoEncontradoException("Cliente Solicitante não encontrado " + id));
	}

	private void deletarListaTimes(ProjetoEntity projetoEntity) {
			List<TimeScrumEntity> times = timeScrumRespository.findByProjetoId(projetoEntity.getId());
			if(!times.isEmpty()) {
				times.forEach(timeScrumRespository::delete);
			}
	}

	private void gravarListaDesenvolvidores(ProjetoEntity projetoEntity, List<TimeScrumVO> times) {
		
		times.forEach(t-> {
			
			UsuarioEntity usuarioTime = usuarioService.recuperarUsuario(t.getIdUsuario());
			
			if(usuarioTime.getPerfil() != PerfilEnum.DEVELOPER) {
				throw new MsgException("Usuário com ID " +usuarioTime.getId() + " não tem perfil de desenvolvidor");
			}
			
			TimeScrumEntity timeEntity = TimeScrumEntity.builder()
					.usuario(usuarioTime)
					.projeto(projetoEntity)
					.perfil(usuarioTime.getPerfil())
					.dataHoraCadastro(LocalDateTime.now())
					.build();
			
			timeScrumRespository.save(timeEntity);
		});
	}

	private void validarCpfCnpjCliente(String cpfCnpj) {
		if(cpfCnpj.length() != 11 && cpfCnpj.length() != 14) {
			throw new MsgException("Dígitos de CPF/CNPJ de inválido");
		}
	}

	public ProjetoVO recuperarProjeto(Long id) {
		
		ProjetoEntity projeto = recuperarProjetoPorId(id);
		
		return ProjetoVOFactory.converterParaVO(projeto);
	}

	private ProjetoEntity recuperarProjetoPorId(Long id) {
		return projetoRepository.findById(id)
				.orElseThrow(() ->new NaoEncontradoException("Projeto com ID{} " +id + "não encontrado"));
	}

	public List<ProjetoVO> recuperarProjetoUsuarioVinculado(String token) {
		
		LoginUsuarioEntity usuario = usuarioService.recuperarUsuarioLogadoPorToken(token);
				
		List<ProjetoEntity> projeto = new ArrayList<>();
		
		if(usuario.getUsuario().getPerfil().equals(PerfilEnum.PRODUCT_OWNER)) {
			projeto = projetoRepository.buscarProjetoVinculoProductOwner(usuario.getUsuario().getId());
		} else if(usuario.getUsuario().getPerfil().equals(PerfilEnum.SCRUM_MASTER)) {
			projeto = projetoRepository.buscarProjetoVinculoSrcumMaster(usuario.getUsuario().getId());
		} else if(usuario.getUsuario().getPerfil().equals(PerfilEnum.DEVELOPER)) {
			projeto = projetoRepository.buscarProjetoVinculoDesenvolvidor(usuario.getUsuario().getId());
		}
		if(projeto.isEmpty()) {
			throw new NaoEncontradoException("Nenhum projeto está vinculado com " +usuario.getUsuario().getNome());
		}
		
		return ProjetoVOFactory.converterListParaVO(projeto);
		
		/**/
	}

}
