package com.BeldiFlavored.ReservationTables.dto;
import com.BeldiFlavored.ReservationTables.model.Tables;
import com.BeldiFlavored.ReservationTables.util.TimesLot;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDto {


    private Long id;

    public TimesLot timesLot;

    private Tables table;

    public ReservationDto(Long id, Tables table, LocalDateTime checkIn, LocalDateTime checkOut) {
        this.id = id;
        this.table = table;
        this.timesLot = new TimesLot(checkIn, checkOut);
    }

}
