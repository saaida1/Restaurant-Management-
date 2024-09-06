package com.beldi.userdash;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "USER")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "ID")
    private int id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "PHONE")
    private String phone;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "PICTURE")
    private String picture;
    @Column(name = "ORDERS")
    private String orders;
    @Column(name = "FAVORITES")
    private String favorites;
    @Column(name = "CARD")
    private String card;

}
