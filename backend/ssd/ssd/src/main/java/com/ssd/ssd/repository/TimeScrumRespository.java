package com.ssd.ssd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssd.ssd.entity.TimeScrumEntity;

public interface TimeScrumRespository extends JpaRepository<TimeScrumEntity, Long> {

	void deleteAllByProjetoId(Long id);

	List<TimeScrumEntity> findByProjetoId(Long id);

}
