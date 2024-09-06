package com.BeldiFlavored.ReservationTables.rest;


import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.dto.TablesDto;
import com.BeldiFlavored.ReservationTables.util.TimesLot;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.BeldiFlavored.ReservationTables.service.TableService;


import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Table Controller
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/table")
@Slf4j
public class TableController {

    private final TableService tableService;

    @Autowired
    public TableController(TableService tableService) {
        this.tableService = tableService;
    }

    @PostMapping
    public ResponseEntity<Long> createTable(@RequestBody @Valid TablesDto tableDto,
                                            BindingResult bindingResult)  {
        Long tableId = tableService.save(tableDto).getId();
        return new ResponseEntity<Long>(tableId, HttpStatus.CREATED);
    }
    @PostMapping("/reservation")
    public ResponseEntity<String> makeReservation(@RequestBody @Valid ReservationDto reservationDto,
                                                  BindingResult bindingResult) {
        tableService.makeReservation(reservationDto);
        return new ResponseEntity<String>("Reservation made successfully", HttpStatus.CREATED);
    }
    @GetMapping("/check")
    public ResponseEntity<String> checkExists(@RequestParam String name) {
        tableService.checkExists(name);
        return new ResponseEntity<String>("Table exists", HttpStatus.OK);
    }


    //////////////////////////

    @GetMapping("/getAll")
    public List<TablesDto> getAllTables() {
        List<TablesDto> tables = tableService.findAll();
        return tables;
    }
    @PostMapping("/AvailableTables")
    public List<TablesDto> getAvailableTables(@RequestBody TimesLot timesLot) {

        log.info("checkin: " + timesLot.getCheck_in().toString() + " checkout: " + timesLot.getCheck_out().toString());

        List<TablesDto> tables = tableService.getAvailableTables(timesLot.getCheck_in(),timesLot.getCheck_out());
        return tables;
    }
    @PostMapping("/add")
    public ResponseEntity<TablesDto> addTable(@RequestBody TablesDto tablesDto) {
        return ResponseEntity.ok(tableService.save(tablesDto));
    }

}