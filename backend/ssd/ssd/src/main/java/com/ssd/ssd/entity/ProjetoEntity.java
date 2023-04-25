package com.ssd.ssd.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.ssd.ssd.enumerator.SituacaoEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "TB_SSD_PROJETO")
public class ProjetoEntity implements Serializable{

	private static final long serialVersionUID = -3718611322080399965L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDENT")
	private Long id;
	
	@Column(name = "NOME", nullable = false, length = 120)
	private String nome;
	
	@Column(name = "DESCRICAO", nullable = false, length = 120)
	private String descricao;
	
	@Column(name = "STATUS")
	@Enumerated(EnumType.STRING)
	private SituacaoEnum status;
	
	@Column(name = "DATA_CADASTRO", nullable = false)
	private LocalDateTime dataCadastro;
	
	@Column(name = "STATUS_PERCENTAGEM", nullable = false)
	private Double statusPercentagem;
	
	

}
