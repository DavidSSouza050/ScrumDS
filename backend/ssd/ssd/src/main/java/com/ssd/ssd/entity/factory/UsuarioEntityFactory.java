package com.ssd.ssd.entity.factory;

import java.time.LocalDateTime;

import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.enumerator.StatusEnum;
import com.ssd.ssd.utils.Encrypt;
import com.ssd.ssd.vo.UsuarioVO;

public class UsuarioEntityFactory {
	
	UsuarioEntityFactory(){}

	public static UsuarioEntity converterParaEntity(UsuarioVO usuario) {
		
		if(usuario != null) {
			return UsuarioEntity.builder()
					.nome(usuario.getNomeCompleto())
					.email(usuario.getEmail())
					.cpf(usuario.getCpf())
					.dataNascimento(usuario.getDataNascimento())
					.dataCadastro(LocalDateTime.now())
					.perfil(usuario.getPerfil())
					.senha(Encrypt.getHash(usuario.getSenha()))
					.senhaConfirmada(Encrypt.getHash(usuario.getSenhaConfirmada()))
					.status(StatusEnum.ATIVO)
					.build();
		}
		else 
			return null;
	}

	public static UsuarioEntity alterar(UsuarioVO usuario) {

		if(usuario != null) {
			return UsuarioEntity.builder()
					.nome(usuario.getNomeCompleto())
					.cpf(usuario.getCpf())
					.email(usuario.getEmail())
					.dataCadastro(usuario.getDataCadastro())
					.dataNascimento(usuario.getDataNascimento())
					.perfil(usuario.getPerfil())
					.dataCadastro(LocalDateTime.now())
					.senha(Encrypt.getHash(usuario.getSenha()))
					.build();
		}
		else 
			return null;
	}

}
