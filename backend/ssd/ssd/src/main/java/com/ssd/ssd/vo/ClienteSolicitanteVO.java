package com.ssd.ssd.vo;

import java.io.Serializable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.ssd.ssd.enumerator.RamoAtividadeEnum;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ClienteSolicitanteVO implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Size(max = 50)
	@NotNull(message = "Telefone é um campo obrigatório")
	private String nome;
	
	@NotNull(message = "CPF/CNPJ é um campo obrigatório")
	private String cpfCnpj;
	
	@NotNull(message = "Telefone é um campo obrigatório")
	private String telefone;
	
	@NotNull(message = "Email é um campo obrigatório")
	private String email;
	
	@NotNull(message = "Ramo atividade é um campo obrigatório")
	private RamoAtividadeEnum ramoAtividade;

}
