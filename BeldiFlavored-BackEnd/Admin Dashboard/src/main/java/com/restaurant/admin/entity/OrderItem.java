package com.restaurant.admin.entity;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class OrderItem {
    private String name;
    private Integer quantity;
}
