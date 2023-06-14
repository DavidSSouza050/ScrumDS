package com.ssd.ssd.vo.factory;

import java.util.List;

import com.ssd.ssd.entity.TimeScrumEntity;
import com.ssd.ssd.vo.TimeScrumVO;

public class TimesVOFactory {
	
	private TimesVOFactory() {}
	
	public static TimeScrumVO conveterParaVO(TimeScrumEntity entity) {
		if(entity != null) {
			return TimeScrumVO.builder()
					.idUsuario(entity.getUsuario().getId())
					.cpf(entity.getUsuario().getCpf())
					.nome(entity.getUsuario().getNome())
					.perfil(entity.getPerfil())
					.build();
		}else 
			return null;
	}
	
	public static List<TimeScrumVO> conveterListParaVO(List<TimeScrumEntity> devenvolvidores) {
		return devenvolvidores.stream().map(TimesVOFactory::conveterParaVO).toList();
	}

}
