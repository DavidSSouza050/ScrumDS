package com.ssd.ssd.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import com.ssd.ssd.enumerator.PerfilEnum;
import com.ssd.ssd.enumerator.StatusEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "TB_SSD_USUARIO")
public class UsuarioEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDENT")
	private Long id;
	
	@Column(name = "NOME", nullable = false, length = 120)
	private String nome;
	
	@Column(name = "EMAIL", nullable =  false, length = 50)
	@Email
	private String email;
	
	@Column(name = "CPF", nullable = false, length = 11)
	private String cpf;
	
	@Column(name = "SENHA", nullable = false, length = 50)
	private String senha;
	
	@Column(name = "SENHA_CONFIRMADA", nullable = false, length = 50)
	private String senhaConfirmada;
	
	@Column(name = "DATA_NASCIMENTO", nullable = false)
	private LocalDate dataNascimento;
	
	@Column(name = "DATA_ATUALIZ_CADASTRO", nullable = false)
	private LocalDateTime dataCadastro;

	@Column(name = "PERFIL_USUARIO")
	@Enumerated(EnumType.STRING)
	private PerfilEnum perfil;
	
	@Column(name = "STATUS_USUARIO")
	@Enumerated(EnumType.STRING)
	private StatusEnum status;
	
	

}
