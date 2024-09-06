package com.BeldiFlavored.ReservationTables.service;
import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.model.Reservation;
import com.BeldiFlavored.ReservationTables.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationService  {

    Boolean isTableAvailable(Long tableId, TimesLot timesLot);

    List<ReservationDto> findByTableId(Long tableId);


    void fromLessThanToDates(TimesLot timesLot, IDateTime dateTime) ;
    public ReservationDto save(ReservationDto reservationDto);

    List<ReservationDto> findAll();
    List<Reservation> findConflictingReservations(@Param("checkIn") LocalDateTime checkIn, @Param("checkOut") LocalDateTime checkOut);


    List<ReservationDto> getAllReservations() ;
}