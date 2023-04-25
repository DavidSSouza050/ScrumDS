package com.ssd.ssd.vo.factory;

import java.util.List;

import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.vo.UsuarioVO;

public class UsuarioVOFactory {
	
	UsuarioVOFactory(){}

	public static UsuarioVO converterParaVO(UsuarioEntity usuarioEntity) {
		
		if(usuarioEntity != null) {
			return UsuarioVO.builder()
					.id(usuarioEntity.getId())
					.nomeCompleto(usuarioEntity.getNome())
					.cpf(usuarioEntity.getCpf())
					.email(usuarioEntity.getEmail())
					.dataCadastro(usuarioEntity.getDataCadastro())
					.dataNascimento(usuarioEntity.getDataNascimento())
					.perfil(usuarioEntity.getPerfil())
					.status(usuarioEntity.getStatus())
					.build();
		}
		else 
			return null;
	}

	public static List<UsuarioVO> converterParaList(List<UsuarioEntity> usuarios) {
		return usuarios.stream().map(UsuarioVOFactory::converterParaVO).toList();
	}

}
