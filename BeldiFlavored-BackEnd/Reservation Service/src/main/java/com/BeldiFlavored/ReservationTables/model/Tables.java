package com.BeldiFlavored.ReservationTables.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;


@Builder
@Getter
@Setter
@ToString
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "RES_TABLE",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"RES_TABL_NAME"}, name = "RES_TABLE_NAME_UNIQUE")},
        indexes = {@Index(columnList = "RES_TABL_NAME", name = "RES_TABLE_NAME_INDEX")}
)
public class Tables {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RES_TABL_ID")
    private Long id;

    @NotNull
    @NotBlank
    @Size(max = 64)
    @Column(name = "RES_TABL_NAME")
    private String name;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "table")
    private List<Reservation> reservations;
    public Tables(String name){
        this.name = name;
    }

}