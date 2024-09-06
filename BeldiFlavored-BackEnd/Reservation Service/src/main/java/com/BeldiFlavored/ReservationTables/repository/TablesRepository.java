package com.BeldiFlavored.ReservationTables.repository;

import com.BeldiFlavored.ReservationTables.model.Tables;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TablesRepository extends JpaRepository<Tables, Long> {
    Tables findByName(String name);

 //   @Query("select new com.javarightnow.reservation.table.specificfind.CustomerReservationDto(cu.name, re.timesLot.from, re.timesLot.to) " +
  //          " from Reservation re join CustomerEntity cu on re.customer.id = cu.id where re.table.id = :tableId")
   // List<CustomerReservationDto> findByTableId(final @Param("tableId") Long tableId , Pageable pageable);

}
