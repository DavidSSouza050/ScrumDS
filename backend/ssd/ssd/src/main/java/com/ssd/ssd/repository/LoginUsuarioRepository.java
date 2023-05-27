package com.ssd.ssd.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssd.ssd.entity.LoginUsuarioEntity;

public interface LoginUsuarioRepository  extends JpaRepository<LoginUsuarioEntity, Long>{

	@Query("SELECT usuarioLogado FROM LoginUsuarioEntity usuarioLogado "
			+"join usuarioLogado.usuario usuario "
			+"WHERE usuarioLogado.token = :token ")
	Optional<LoginUsuarioEntity> findByLogadoToken(String token);

}
