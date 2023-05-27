package com.ssd.ssd.service;

import org.springframework.stereotype.Service;

import com.ssd.ssd.vo.ProjetoVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjetoService {
	
	public ProjetoVO cadastrar(ProjetoVO projeto) {
		projeto.getClass();
		return ProjetoVO.builder().build();
	}

}
