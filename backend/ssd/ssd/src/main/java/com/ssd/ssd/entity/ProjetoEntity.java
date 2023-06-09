package com.ssd.ssd.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.ssd.ssd.enumerator.SituacaoEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Entity
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Table(name = "TB_SSD_PROJETO")
public class ProjetoEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDENT")
	private Long id;
	
	@Column(name = "NOME", nullable = false, length = 120)
	private String nome;
	
	@Column(name = "DESCRICAO", nullable = false, length = 120)
	private String descricao;
	
	@Column(name = "STATUS", nullable = false)
	@Enumerated(EnumType.STRING)
	private SituacaoEnum status;
	
	@Column(name = "DATA_HORA_CADASTRO", nullable = false)
	private LocalDateTime dataCadastro;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_SCRUM_MASTER", referencedColumnName = "IDENT", nullable=false)
	private UsuarioEntity scrumMaster;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_PRODUCT_OWNER", referencedColumnName = "IDENT", nullable=false)
	private UsuarioEntity produtOwner;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ID_CLIENTE_SOLICITANTE", referencedColumnName = "IDENT", nullable=false)
	private ClienteSolicitanteEntity cliente;
	
	@OneToMany(mappedBy = "projeto", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	private List<TimeScrumEntity> devenvolvidores;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ID_BACKLOG_PRODUTO", referencedColumnName = "IDENT", nullable=true)
	private ColunasEntity backlogProduto;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ID_SPRINT_DESEN", referencedColumnName = "IDENT", nullable=true)
	private ColunasEntity sprintsDesenvolvimento;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ID_SPRINT_REVISAO", referencedColumnName = "IDENT", nullable=true)
	private ColunasEntity sprintRevisao;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "ID_SPRINT_FINALIZADA", referencedColumnName = "IDENT", nullable=true)
	private ColunasEntity sprintFinalizada;
	
}

