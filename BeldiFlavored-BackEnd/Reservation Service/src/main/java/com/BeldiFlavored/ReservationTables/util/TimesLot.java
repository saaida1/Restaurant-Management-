package com.BeldiFlavored.ReservationTables.util;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Embeddable
@Access(AccessType.FIELD)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimesLot {
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "RES_RSRV_check_In")
    private LocalDateTime check_in;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "RES_RSRV_check_Out")
    private LocalDateTime check_out ;
}

