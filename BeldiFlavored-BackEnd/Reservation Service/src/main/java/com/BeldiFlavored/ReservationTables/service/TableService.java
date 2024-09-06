package com.BeldiFlavored.ReservationTables.service;

import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.dto.TablesDto;
import com.BeldiFlavored.ReservationTables.model.Tables;

import java.time.LocalDateTime;
import java.util.List;


public interface TableService {


    void makeReservation(ReservationDto reservationDto);

    // TableReservationCustomerDto findReservationsByTableId(Long tableId, SimplePageRequestDTO simplePageRequestDTO) throws GeneralException;

    void checkExists(String name);

    TablesDto save(TablesDto dto);

    List<TablesDto> findAll();


    List<TablesDto> getAvailableTables(LocalDateTime checkIn, LocalDateTime checkOut);
}