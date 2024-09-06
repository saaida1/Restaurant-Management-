package com.restaurant.admin.repository;

import com.restaurant.admin.entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {}
