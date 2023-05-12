package com.ssd.ssd.vo;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor @AllArgsConstructor
public class LoginVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@NotNull(message = "CPF é um campo obrigatório")
	private String cpf;
	
	@NotNull(message = "Senha é um campo obrigatório")
	private String senha;

}
