package com.angular.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angular.patrimonio.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
