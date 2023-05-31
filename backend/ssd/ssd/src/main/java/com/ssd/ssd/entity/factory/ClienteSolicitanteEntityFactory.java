package com.ssd.ssd.entity.factory;

import java.time.LocalDateTime;

import com.ssd.ssd.entity.ClienteSolicitanteEntity;
import com.ssd.ssd.vo.ClienteSolicitanteVO;

public class ClienteSolicitanteEntityFactory {
	
	private ClienteSolicitanteEntityFactory() {}

	public static ClienteSolicitanteEntity converterParaVO(ClienteSolicitanteVO vo) {
		
		if(vo != null) {
			return ClienteSolicitanteEntity.builder()
					.nome(vo.getNome())
					.cpfCnpj(vo.getCpfCnpj())
					.telefone(vo.getTelefone())
					.email(vo.getEmail())
					.ramoAtividade(vo.getRamoAtividade())
					.dataCadastro(LocalDateTime.now())
					.build();
		} else 
			return null;
	}

}
