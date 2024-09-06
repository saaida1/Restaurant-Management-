package com.restaurant.admin.entity;

import lombok.Data;

@Data
public class Menu {
    private Long id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String cover;
    private Integer amount;
}
