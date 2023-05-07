package com.ssd.ssd.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssd.ssd.entity.UsuarioEntity;
import com.ssd.ssd.enumerator.StatusEnum;

public interface UsuarioRepository  extends JpaRepository<UsuarioEntity, Long>{

	
	Optional<UsuarioEntity> findByEmail(String email);

	
	Optional<UsuarioEntity> findByCpf(String cpf);

	@Query(" SELECT usuario FROM UsuarioEntity usuario "
//			+" join usuario.status situacao "
			+" WHERE status = :pendente ")
	List<UsuarioEntity> findByStatusPendentes(@Param("pendente") StatusEnum pendente);

}
