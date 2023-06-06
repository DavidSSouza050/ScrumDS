package com.ssd.ssd.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssd.ssd.service.ProjetoService;
import com.ssd.ssd.vo.ProjetoVO;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/projeto")
@RequiredArgsConstructor
public class ProjetoController {
	
	private final ProjetoService projetoService;
	
	@PostMapping("/")
	public ProjetoVO cadastrarProjeto (@RequestBody ProjetoVO projeto) {
		return projetoService.cadastrar(projeto);
	}
	
	@GetMapping("/{id}")
	public ProjetoVO recuperarProjeto (@PathVariable Long id) {
		return projetoService.recuperarProjeto(id);
	}
	
	@GetMapping("/por-vinculo/{token}")
	public ProjetoVO recuperarProjeto (@PathVariable String token) {
		return projetoService.recuperarProjetoUsuarioVinculado(token);
	}
}
