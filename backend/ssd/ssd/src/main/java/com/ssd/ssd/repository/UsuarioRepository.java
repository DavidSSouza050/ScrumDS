package com.ssd.ssd.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssd.ssd.entity.UsuarioEntity;

public interface UsuarioRepository  extends JpaRepository<UsuarioEntity, Long>{

	
	Optional<UsuarioEntity> findByEmail(String email);
	
	Optional<UsuarioEntity> findByCpf(String cpf);

	@Query(" SELECT usuario FROM UsuarioEntity usuario "
			+" ORDER BY usuario.id ")
	List<UsuarioEntity> findUsuarios();

}
