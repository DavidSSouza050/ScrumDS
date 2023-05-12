package com.ssd.ssd.vo;

import java.io.Serializable;
import java.time.LocalDate;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import com.ssd.ssd.enumerator.SituacaoEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor @AllArgsConstructor
public class ProjetoVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@Size(max = 120, message = "Nome não pode ter mais 120 caracteres")
	@NotNull(message = "Nome é um campo obrigatório")
	private String nome;
	
	@Size(max = 150, message = "Nome não pode ter mais 150 caracteres")
	@NotNull(message = "Descrição é um campo obrigatório")
	private String descricao;
	
	@NotNull(message = "Status é um campo obrigatório")
	private SituacaoEnum status;
	
	@Past
	@NotNull(message = "Data nascimento é um campo obrigatório")
	private LocalDate dataCadastro;
	
	private Double statusPercentagem;

}