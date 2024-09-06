package com.BeldiFlavored.ReservationTables.mapper;


import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.model.*;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component

public final class ReservationMapper {
    public Reservation toEntity(ReservationDto reservationDto){
        return new Reservation(
                reservationDto.getId(),
                reservationDto.getTimesLot(),
                reservationDto.getTable()
        );
    }

    public ReservationDto toDto(Reservation reservation){
        return ReservationDto.builder()
                .id(reservation.getId())
                .timesLot(reservation.getTimesLot())
                .table(reservation.getTable())
                .build();
    }
    public List<Reservation> toReservation(List<ReservationDto> listReservationDto){
        return listReservationDto.stream().map(this::toEntity).collect(Collectors.toList());
    }
    public List<ReservationDto> toReservationDto(List<Reservation> listReservation){
        return listReservation.stream().map(this::toDto).collect(Collectors.toList());
    }
    public Reservation updateEntity(ReservationDto reservationDto, Reservation reservation){
        reservation.setTimesLot(reservationDto.getTimesLot());
        reservation.setTable(reservationDto.getTable());
        return reservation;
    }

}

