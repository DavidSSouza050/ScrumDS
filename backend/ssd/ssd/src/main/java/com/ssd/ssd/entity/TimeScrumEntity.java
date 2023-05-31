package com.ssd.ssd.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

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
import javax.persistence.Table;

import com.ssd.ssd.enumerator.PerfilEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@Entity
@Builder
@NoArgsConstructor 
@AllArgsConstructor
@Table(name = "TB_SSD_TIME_SCRUM")
public class TimeScrumEntity  implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDENT")
	private Long id;
	
	@Column(name = "PERFIL_USUARIO", nullable = false)
	@Enumerated(EnumType.STRING)
	private PerfilEnum perfil;
	
	@Column(name = "DATA_HORA_CADASTRO")
	private LocalDateTime dataHoraCadastro;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="ID_PROJETO", nullable=false)
	private ProjetoEntity projeto;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_USUARIO", referencedColumnName = "IDENT", nullable=false)
	private UsuarioEntity usuario;
	
}
