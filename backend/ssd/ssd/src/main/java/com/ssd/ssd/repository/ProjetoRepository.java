package com.ssd.ssd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ssd.ssd.entity.ProjetoEntity;

public interface ProjetoRepository extends JpaRepository<ProjetoEntity, Long> {

	@Query("SELECT projeto FROM ProjetoEntity projeto "
			+ "JOIN projeto.produtOwner userPo "
			+ "WHERE userPo.id = :idUsuarioPo ")
	ProjetoEntity buscarProjetoVinculoProductOwner(Long idUsuarioPo);
	
	@Query("SELECT projeto FROM ProjetoEntity projeto "
			+ "JOIN projeto.scrumMaster userSrum "
			+ "WHERE userSrum.id = :idUsuarioScrum ")
	ProjetoEntity buscarProjetoVinculoSrcumMaster(Long idUsuarioScrum);

}
