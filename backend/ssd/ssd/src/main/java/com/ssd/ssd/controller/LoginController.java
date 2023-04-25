package com.ssd.ssd.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssd.ssd.service.LoginService;
import com.ssd.ssd.vo.LoginVO;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class LoginController {

	private final LoginService loginService;

	@PostMapping(value = "/login")
	public String login(@RequestBody @Valid LoginVO login) {
		return loginService.login(login);
	}

}
