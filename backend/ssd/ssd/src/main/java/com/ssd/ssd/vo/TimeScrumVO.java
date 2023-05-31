package com.ssd.ssd.vo;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TimeScrumVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long idUsuario;

}
