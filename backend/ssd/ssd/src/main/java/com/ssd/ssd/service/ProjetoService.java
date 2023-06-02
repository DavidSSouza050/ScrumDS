package com.ssd.ssd.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ssd.ssd.entity.ClienteSolicitanteEntity;
import com.ssd.ssd.entity.ProjetoEntity;
import com.ssd.ssd.entity.TimeScrumEntity;
import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.entity.factory.ClienteSolicitanteEntityFactory;
import com.ssd.ssd.entity.factory.ProjetoEntityFactory;
import com.ssd.ssd.enumerator.PerfilEnum;
import com.ssd.ssd.exception.MsgException;
import com.ssd.ssd.repository.ProjetoRepository;
import com.ssd.ssd.repository.TimeScrumRespository;
import com.ssd.ssd.vo.ProjetoVO;
import com.ssd.ssd.vo.TimeScrumVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjetoService {
	
//	private final UsuarioRepository usuarioRepository;
	
	private final TimeScrumRespository timeScrumRespository;
	private final ProjetoRepository projetoRepository;
	
	private final UsuarioService usuarioService;
	
	public ProjetoVO cadastrar(ProjetoVO projetoVO) {
		
		validarCpfCnpjCliente(projetoVO.getCliente().getCpfCnpj());
		
		UsuarioEntity usuarioScrum = usuarioService.recuperarUsuario(projetoVO.getIdUsuarioScrum());
		
		ClienteSolicitanteEntity cliente = ClienteSolicitanteEntityFactory.converterParaVO(projetoVO.getCliente());
		
		ProjetoEntity projetoEntity = ProjetoEntityFactory.converterParaEntity(projetoVO, usuarioScrum, cliente);
		
		projetoRepository.save(projetoEntity);
		
		gravarListaDesenvolvidores(projetoEntity, projetoVO.getTimes());
		
		return ProjetoVO.builder()
				.id(projetoEntity.getId())
				.build();
	}

	private void gravarListaDesenvolvidores(ProjetoEntity projetoEntity, List<TimeScrumVO> times) {
		
		if(times.stream().noneMatch(r-> r.getPerfil().equals(PerfilEnum.PRODUCT_OWNER))) {
			throw new MsgException("É necessário incluir um Product Owner no projeto");
		}
		
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


}
