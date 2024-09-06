package com.restaurant.admin.repository;

import com.restaurant.admin.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {}
