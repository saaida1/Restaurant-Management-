package com.restaurant.admin.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table( name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<OrderItem> items;

    @Embedded
    private Address address;

    private Double amount;
    private String status;
}
