package com.cursoDevSuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cursoDevSuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
