package com.ssd.ssd.exception;

public class NaoAutorizadoException extends RuntimeException {
	
	private static final long serialVersionUID = 2080165728071492796L;

	public NaoAutorizadoException(String msg) {
		super(msg);
	}
}
