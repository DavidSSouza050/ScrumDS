package com.ssd.ssd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssd.ssd.entity.ProjetoEntity;

public interface ProjetoRepository extends JpaRepository<ProjetoEntity, Long> {

	@Query("SELECT projeto FROM ProjetoEntity projeto "
			+ "JOIN projeto.produtOwner userPo "
			+ "WHERE userPo.id = :idUsuarioPo ")
	List<ProjetoEntity> buscarProjetoVinculoProductOwner(Long idUsuarioPo);
	
	@Query("SELECT projeto FROM ProjetoEntity projeto "
			+ "JOIN projeto.scrumMaster userSrum "
			+ "WHERE userSrum.id = :idUsuarioScrum ")
	List<ProjetoEntity> buscarProjetoVinculoSrcumMaster(Long idUsuarioScrum);
	
	@Query("SELECT projeto FROM ProjetoEntity projeto "
			+ "JOIN projeto.devenvolvidores dev "
			+ "WHERE dev.id = :idUsuarioDev")
	List<ProjetoEntity> buscarProjetoVinculoDesenvolvidor(Long idUsuarioDev);

}
