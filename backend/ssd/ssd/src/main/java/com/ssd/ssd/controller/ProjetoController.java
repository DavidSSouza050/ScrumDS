package com.ssd.ssd.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
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
	public ProjetoVO cadastrarUsuario (@RequestBody ProjetoVO projeto) {
		return projetoService.cadastrar(projeto);
	}

}
