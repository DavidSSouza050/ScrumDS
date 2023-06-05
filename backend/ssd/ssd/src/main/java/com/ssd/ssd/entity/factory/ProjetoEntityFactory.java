package com.ssd.ssd.entity.factory;

import java.time.LocalDateTime;

import com.ssd.ssd.entity.ClienteSolicitanteEntity;
import com.ssd.ssd.entity.ProjetoEntity;
import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.enumerator.SituacaoEnum;
import com.ssd.ssd.vo.ProjetoVO;

public class ProjetoEntityFactory {
	
	private ProjetoEntityFactory() {}

	public static ProjetoEntity converterParaEntity(ProjetoVO vo, UsuarioEntity usuarioScrum, 
			ClienteSolicitanteEntity cliente, UsuarioEntity usuarioProdutOwner) {
		if(vo != null) {
			return ProjetoEntity.builder()
					.nome(vo.getNome())
					.status(SituacaoEnum.CADASTRADO)
					.descricao(vo.getDescricao())
					.dataCadastro(LocalDateTime.now())
					.scrumMaster(usuarioScrum)
					.cliente(cliente)
					.produtOwner(usuarioProdutOwner)
					.build();
		} else 
			return null;
	}

}
