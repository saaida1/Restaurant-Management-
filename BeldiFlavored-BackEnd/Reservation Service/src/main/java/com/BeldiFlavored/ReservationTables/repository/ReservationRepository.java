package com.BeldiFlavored.ReservationTables.repository;

import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>  {



//    @Query("SELECT r.id as id, r.table.id as tableId, r.timesLot.check_in as checkIn, r.timesLot.check_out as checkOut FROM Reservation r")
//    @Query("SELECT new com.BeldiFlavored.ReservationTables.dto.ReservationDto(r.id, r.table.id, r.timesLot.check_in, r.timesLot.check_out) FROM Reservation r"

    @Query("SELECT new com.BeldiFlavored.ReservationTables.dto.ReservationDto(r.id, r.table,  r.timesLot.check_in, r.timesLot.check_out) FROM Reservation r")
    List<ReservationDto> findAllReservations();










    List<Reservation> findByTableId(Long tableId);

    /**
     * If it returns 0, it means the table is available and it can be reserved between the given dates.
     * If it returns > 0, it means that table has already reserved by someone else.
     *
     * @param tableId
     * @param inputFrom
     * @param inputTo
     * @return
     */
    @Query("select count(r) from Reservation r where r.table.id = :tableId" +
            " and not (" +
            " not (r.timesLot.check_in >= :inputFrom and r.timesLot.check_in < :inputTo)" +
            " and " +
            " not (r.timesLot.check_out  > :inputFrom and r.timesLot.check_out  <= :inputTo)" +
            " )"
    )
    long countOfConflictedRecords(@Param("tableId") Long tableId,
                                  @Param("inputFrom") LocalDateTime inputFrom,
                                  @Param("inputTo") LocalDateTime inputTo);

    @Query("SELECT r FROM Reservation r WHERE (r.timesLot.check_in <= :checkOut) AND (r.timesLot.check_out >= :checkIn)")
    List<Reservation> findConflictingReservations(@Param("checkIn") LocalDateTime checkIn, @Param("checkOut") LocalDateTime checkOut);

}