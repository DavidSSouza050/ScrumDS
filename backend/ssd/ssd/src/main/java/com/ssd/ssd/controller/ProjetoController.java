package com.ssd.ssd.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssd.ssd.service.ProjetoService;
import com.ssd.ssd.vo.ProjetoVO;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class ProjetoController {
	
	private final ProjetoService projetoService;
	
	@PostMapping("/projeto")
	public ProjetoVO cadastrarUsuario (ProjetoVO projeto) {
		return projetoService.cadastrar(projeto);
	}

}
