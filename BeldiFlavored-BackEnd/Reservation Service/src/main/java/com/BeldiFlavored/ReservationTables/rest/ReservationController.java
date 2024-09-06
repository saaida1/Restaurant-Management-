package com.BeldiFlavored.ReservationTables.rest;

import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.service.ReservationService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Reservation Controller
 */
@RestController
@RequestMapping("/api/v1/reservations")
@Slf4j
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }
    @GetMapping("/getAll")
    public List<ReservationDto> getAllReservations() {
        List<ReservationDto> reservations = reservationService.findAll();
        return reservations;
    }
}