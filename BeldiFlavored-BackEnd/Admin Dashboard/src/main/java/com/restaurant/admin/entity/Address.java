package com.restaurant.admin.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Address {
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private String state;
    private String country;
    private String zipcode;
    private String phone;
}
