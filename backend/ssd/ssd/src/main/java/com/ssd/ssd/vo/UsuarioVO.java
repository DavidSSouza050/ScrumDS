package com.ssd.ssd.vo;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import com.ssd.ssd.enumerator.PerfilEnum;
import com.ssd.ssd.enumerator.StatusEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor @AllArgsConstructor
public class UsuarioVO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@Size(max = 120, message = "Nome não pode ter mais 150 caracteres")
	@NotNull(message = "Nome é um campo obrigatório")
	private String nomeCompleto;
	
	@Size(max = 50)
	@NotNull(message = "Email é um campo obrigatório")
	private String email;
	
	@Size(max = 11, min = 11, message = "CPF deve ter 11 caracteres")
//	@NotNull(message = "CPF é um campo obrigatório")
//	@Pattern(regexp = "^(([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2}))$", message = "CPF informado é inválido")
	private String cpf;
	
	@Past
//	@NotNull(message = "Data nascimento é um campo obrigatório")
	private LocalDate dataNascimento;
	
	private LocalDateTime dataCadastro;
	
	@Size(max = 50, min = 8, message = "A senha deve ter no minimo 8 caracteres e maximo 16")
	@NotNull(message = "Senha é um campo obrigatório")
//	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\\\S+$).{8,20}$")
	private String senha;
	
	@Size(max = 50, min = 8, message = "A senha deve ter no minimo 8 caracteres e maximo 16")
	@NotNull(message = "Senha é um campo obrigatório")
	private String senhaConfirmada;
	
	@NotNull(message = "Perfil é um campo obrigatório")
	private PerfilEnum perfil;
	
	private StatusEnum status;
}
