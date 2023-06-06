package com.ssd.ssd.service;

import java.time.LocalDateTime;
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
import com.ssd.ssd.exception.MsgException;
import com.ssd.ssd.exception.NaoEncontradoException;
import com.ssd.ssd.repository.ProjetoRepository;
import com.ssd.ssd.repository.TimeScrumRespository;
import com.ssd.ssd.vo.ClienteSolicitanteVO;
import com.ssd.ssd.vo.ProjetoVO;
import com.ssd.ssd.vo.TimeScrumVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjetoService {
	
	private final ProjetoRepository projetoRepository;
	private final TimeScrumRespository timeScrumRespository;
	
	private final UsuarioService usuarioService;
	
	public ProjetoVO cadastrar(ProjetoVO projetoVO) {
		
		validarCpfCnpjCliente(projetoVO.getCliente().getCpfCnpj());
		
		UsuarioEntity usuarioScrum = usuarioService.recuperarUsuario(projetoVO.getIdUsuarioScrum());
		
		if(usuarioScrum.getPerfil() != PerfilEnum.SCRUM_MASTER) {
			throw new MsgException("A criação do projeto é permitido pelo usuário Scrum Master");
		}
		
		UsuarioEntity usuarioProduct = usuarioService.recuperarUsuario(projetoVO.getIdProductOwner());
		
		ClienteSolicitanteEntity cliente = ClienteSolicitanteEntityFactory.converterParaVO(projetoVO.getCliente());
		
		ProjetoEntity projetoEntity = ProjetoEntityFactory.converterParaEntity(projetoVO, usuarioScrum, cliente, usuarioProduct);
		
		projetoEntity = projetoRepository.save(projetoEntity);
		
		gravarListaDesenvolvidores(projetoEntity, projetoVO.getTimes());
		
		return ProjetoVO.builder()
				.id(projetoEntity.getId())
				.build();
	}

	private void gravarListaDesenvolvidores(ProjetoEntity projetoEntity, List<TimeScrumVO> times) {
		
		times.forEach(t-> {
			
			UsuarioEntity usuarioTime = usuarioService.recuperarUsuario(t.getIdUsuario());
			
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
		
		return ProjetoVO.builder()
				.id(projeto.getId())
				.nome(projeto.getNome())
				.cliente(ClienteSolicitanteVO.builder()
						.id(projeto.getCliente().getId())
						.cpfCnpj(projeto.getCliente().getCpfCnpj())
						.nome(projeto.getCliente().getNome())
						.telefone(projeto.getCliente().getTelefone())
						.ramoAtividade(projeto.getCliente().getRamoAtividade())
						.build())
				.build();
	}

	private ProjetoEntity recuperarProjetoPorId(Long id) {
		return projetoRepository.findById(id)
				.orElseThrow(() ->new NaoEncontradoException("Projeto com ID{} " +id + "não encontrado"));
	}

	public ProjetoVO recuperarProjetoUsuarioVinculado(String token) {
		
		LoginUsuarioEntity usuario = usuarioService.recuperarUsuarioLogadoPorToken(token);
				
		ProjetoEntity projeto = null;
		
		if(usuario.getUsuario().getPerfil().equals(PerfilEnum.PRODUCT_OWNER)) {
			projeto = projetoRepository.buscarProjetoVinculoProductOwner(usuario.getUsuario().getId());
		} else if(usuario.getUsuario().getPerfil().equals(PerfilEnum.SCRUM_MASTER)) {
			projeto = projetoRepository.buscarProjetoVinculoSrcumMaster(usuario.getUsuario().getId());
		} else if(usuario.getUsuario().getPerfil().equals(PerfilEnum.DEVELOPER)) {
			
		}
		if(projeto == null) {
			throw new NaoEncontradoException("Nenhum projeto encontrado com");
		}
		
		return ProjetoVO.builder()
				.id(projeto.getId())
				.nome(projeto.getNome())
				.cliente(ClienteSolicitanteVO.builder()
						.id(projeto.getCliente().getId())
						.cpfCnpj(projeto.getCliente().getCpfCnpj())
						.nome(projeto.getCliente().getNome())
						.telefone(projeto.getCliente().getTelefone())
						.ramoAtividade(projeto.getCliente().getRamoAtividade())
						.build())
				.build();
	}

}
