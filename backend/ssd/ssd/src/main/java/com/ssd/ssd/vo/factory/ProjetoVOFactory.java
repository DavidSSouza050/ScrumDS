package com.ssd.ssd.vo.factory;

import java.util.List;

import com.ssd.ssd.entity.ProjetoEntity;
import com.ssd.ssd.vo.ClienteSolicitanteVO;
import com.ssd.ssd.vo.ProjetoVO;

public class ProjetoVOFactory {
	
	private ProjetoVOFactory() {}

	public static ProjetoVO converterParaVO(ProjetoEntity projeto) {
		
		if(projeto != null) {
			return ProjetoVO.builder()
					.id(projeto.getId())
					.nome(projeto.getNome())
					.status(projeto.getStatus())
					.descricao(projeto.getDescricao())
					.times(TimesVOFactory.conveterListParaVO(projeto.getDevenvolvidores()))
					.cliente(ClienteSolicitanteVO.builder()
							.id(projeto.getCliente().getId())
							.cpfCnpj(projeto.getCliente().getCpfCnpj())
							.nome(projeto.getCliente().getNome())
							.telefone(projeto.getCliente().getTelefone())
							.ramoAtividade(projeto.getCliente().getRamoAtividade())
							.build())
					.build();
		} else 
			return null;
	}
	
	public static List<ProjetoVO> converterListParaVO(List<ProjetoEntity> projetos) {
		return projetos.stream().map(ProjetoVOFactory::converterParaVO).toList();
	}
}
