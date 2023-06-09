package com.ssd.ssd.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssd.ssd.service.UsuarioService;
import com.ssd.ssd.vo.UsuarioVO;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	
	@PostMapping()
	public UsuarioVO cadastrarUsuario (@RequestBody @Valid UsuarioVO usuario) {
		return usuarioService.cadastrar(usuario);
	}
	
	@GetMapping("/token/{token}")
	public UsuarioVO recuperarPorToken(@PathVariable String token) {
		return usuarioService.recuperarPorToken(token);
	}
	
	@GetMapping("/{id}")
	public UsuarioVO recuperarUsuario(@PathVariable Long id) {
		return usuarioService.recuperar(id);
	}
	
	@GetMapping("/cpf/{cpf}")
	public UsuarioVO recuperarPorCpf(@PathVariable String cpf) {
		return usuarioService.recuperarPorCpf(cpf);
	}
	
	@PutMapping()
	public UsuarioVO atualizarUsuario (@RequestBody @Valid UsuarioVO usuario) {
		return usuarioService.alterar(usuario);
	}
	
	@GetMapping("/listar/{token}")
	public List<UsuarioVO> listarUsuarios(@PathVariable String token) {
		return usuarioService.listarUsuarios(token);
	}
	
	@GetMapping("/desenvolvidores/{cpf}")
	public UsuarioVO recuperarDesenvolidores(@PathVariable String cpf) {
		return usuarioService.recuperarDesenvolidores(cpf);
	}
	
	@GetMapping("/scrum/{cpf}")
	public UsuarioVO recuperarProdutOwner(@PathVariable String cpf) {
		return usuarioService.recuperarProdutOwner(cpf);
	}
	
	/*@PutMapping("/ativar/{idUsuario}")
	public UsuarioVO ativarUsuario (@RequestHeader(value = "Authorization") String token,
			@PathVariable Long idUsuario) {
		return usuarioService.ativarCadastro(token, idUsuario);
	}*/
	
	/*@GetMapping()
	public List<UsuarioVO> listarUsuarios(@RequestHeader(value = "Authorization") String token) {
		return usuarioService.listaUsuarios(token);
	}*/
  
	/*@GetMapping("/token")
	public UsuarioVO recuperarPorToken(@RequestParam String token) {
		return usuarioService.recuperarPorToken(token);
	}*/
}
