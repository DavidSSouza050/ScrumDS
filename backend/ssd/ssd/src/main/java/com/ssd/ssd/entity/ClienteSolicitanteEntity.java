//package com.ssd.ssd.entity;
//
//import java.io.Serializable;
//import java.time.LocalDateTime;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.EnumType;
//import javax.persistence.Enumerated;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//import com.ssd.ssd.enumerator.RamoAtividadeEnum;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data @Builder @NoArgsConstructor @AllArgsConstructor
//@Entity
//@Table(name = "TB_SSD_CLIENTE_SOLICITANTE")
//public class ClienteSolicitanteEntity implements Serializable {
//	
//	private static final long serialVersionUID = 1L;
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "IDENT")
//	private Long id;
//	
//	@Column(name = "NOME", nullable = false, length = 120)
//	private String nome;
//	
//	@Column(name = "CPF_CNPJ", nullable = false, length = 14)
//	private String cpfCnpj;
//	
//	@Column(name = "TELEFONE", nullable = false, length = 10)
//	private String telefone;
//	
//	@Column(name = "EMAIL", nullable = false, length = 50)
//	private String email;
//	
//	@Column(name = "RAMO_ATIVIDADE", nullable = false)
//	@Enumerated(EnumType.STRING)
//	private RamoAtividadeEnum ramoAtividade;
//	
//	@Column(name = "DATA_CADASTRO", nullable = false)
//	private LocalDateTime dataCadastro;
//	
//
//}
