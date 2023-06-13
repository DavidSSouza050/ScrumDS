package com.ssd.ssd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssd.ssd.entity.ItemEntity;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {

}
