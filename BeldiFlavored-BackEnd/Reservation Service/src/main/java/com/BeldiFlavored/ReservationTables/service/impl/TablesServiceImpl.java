package com.BeldiFlavored.ReservationTables.service.impl;

import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.dto.TablesDto;
import com.BeldiFlavored.ReservationTables.mapper.TablesMapper;
import com.BeldiFlavored.ReservationTables.model.Reservation;
import com.BeldiFlavored.ReservationTables.model.Tables;
import com.BeldiFlavored.ReservationTables.repository.TablesRepository;
import com.BeldiFlavored.ReservationTables.service.ReservationService;
import com.BeldiFlavored.ReservationTables.service.TableService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
@Service
@Slf4j
@Transactional
public class TablesServiceImpl implements TableService {
    @Autowired
    private ReservationService reservationService;
   @Autowired
 //   private CustomerService customerService;
    private TablesMapper mapper;
    private final TablesRepository tableRepository;

    @Autowired
    public TablesServiceImpl(TablesRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    @Override
    public TablesDto save(TablesDto dto)  {
        checkExists(dto.getName());

        Tables ent = mapper.toEntity(dto);
        Tables save = tableRepository.save(ent);
        return mapper.toDto(save);
    }




    @Override
    public void makeReservation(ReservationDto reservationDto) {
        reservationService.fromLessThanToDates(
                reservationDto.getTimesLot(),
                LocalDateTime::isBefore
        );
        Boolean isAvailable = reservationService.isTableAvailable(reservationDto.getTable().getId(), reservationDto.getTimesLot());
        log.info("Table with id {} is {}. " + reservationDto.getTable(), isAvailable ? "available" : "not available");
        if (isAvailable) {
            reservationService.save(reservationDto);
        } else {
            log.error("Table with id {} is not available." + reservationDto.getTable());

        }
    }

   // @Transactional(readOnly = true)
 //   @Override
  /*  public TableReservationCustomerDto findReservationsByTableId(Long tableId, SimplePageRequestDTO simplePageRequestDTO)
            throws NoSuchResourceException, EmptyInputException {
        validate(tableId);
        TableEntity tableEntity = tableRepository.getOne(tableId);
        PageRequest pageRequest = preparePageRequest(simplePageRequestDTO);

        List<CustomerReservationDto> reservationDtoList = tableRepository.findByTableId(tableId, pageRequest);

        return TableReservationCustomerDto.builder()
                .id(tableEntity.getId())
                .name(tableEntity.getName())
                .reservations(reservationDtoList)
                .build();
    }
*/
    @Transactional(readOnly = true)
    @Override
    public void checkExists(String name)  {
        if (name == null) {
         log.error("table name is null.");
        }
        boolean exist = tableRepository.findByName(name) != null;
        if (exist) {
            log.error("The table with the given name already exists!");
        }
    }

    public List<TablesDto>  findAll(){
        return  mapper.toTablesDto(tableRepository.findAll());
    }
    public List<TablesDto> getAvailableTables(LocalDateTime checkIn, LocalDateTime checkOut) {
        List<Reservation> conflictingReservations = reservationService.findConflictingReservations(checkIn, checkOut);
        List<Tables> allTables = tableRepository.findAll();
        allTables.removeIf(table -> conflictingReservations.stream().anyMatch(reservation -> reservation.getTable().getId().equals(table.getId())));

        return mapper.toTablesDto(allTables);
    }

}
