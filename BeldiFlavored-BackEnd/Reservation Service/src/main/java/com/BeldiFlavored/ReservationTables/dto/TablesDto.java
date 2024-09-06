package com.BeldiFlavored.ReservationTables.dto;

import com.BeldiFlavored.ReservationTables.model.Reservation;
import lombok.*;

import java.util.List;


@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class TablesDto {
    private Long id;

    private String name;

    private List<Reservation> reservations;

    public TablesDto(String name){
        this.name = name;
    }
}
