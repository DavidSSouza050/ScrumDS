package com.ssd.ssd.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import com.ssd.ssd.exception.MsgException;

public class Encrypt {
	
Encrypt(){}
	
	public static String getHash(String digits) {
		try {
	      MessageDigest md = MessageDigest.getInstance("SHA-256");
	      byte[] digestResult = md.digest(digits.getBytes());
	      return Base64.getEncoder().encodeToString(digestResult);
		}catch(NoSuchAlgorithmException ex) {
			throw new MsgException("Erro ao criptografar senha!");
		}
	}
}
