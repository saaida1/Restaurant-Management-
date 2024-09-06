package com.BeldiFlavored.ReservationTables.service.impl;

import com.BeldiFlavored.ReservationTables.dto.ReservationDto;
import com.BeldiFlavored.ReservationTables.mapper.ReservationMapper;
import com.BeldiFlavored.ReservationTables.model.Reservation;
import com.BeldiFlavored.ReservationTables.model.Tables;
import com.BeldiFlavored.ReservationTables.repository.ReservationRepository;
import com.BeldiFlavored.ReservationTables.service.ReservationService;
import com.BeldiFlavored.ReservationTables.util.IDateTime;
import com.BeldiFlavored.ReservationTables.util.TimesLot;
import jakarta.persistence.EntityManager;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final ReservationMapper mapper;
    @Autowired
    private EntityManager entityManager;
    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository,
                                  ReservationMapper reservationMapper) {
        this.reservationRepository = reservationRepository;
        this.mapper = reservationMapper;
    }

    @Override
    public ReservationDto save(ReservationDto reservationDto) {
        Reservation reservationEntity = mapper.toEntity(reservationDto);
        setTransientFields(reservationEntity);
        Reservation save = reservationRepository.save(reservationEntity);
        return mapper.toDto(save);
    }

    @Transactional(readOnly = true)
    @Override
    public Boolean isTableAvailable(Long tableId, TimesLot timesLot) {
        long countOfConflictedRecords = reservationRepository
                .countOfConflictedRecords(tableId, timesLot.getCheck_in(), timesLot.getCheck_out());
        return countOfConflictedRecords <= 0;
    }

    @Transactional(readOnly = true)
    @Override
    public List<ReservationDto> findByTableId(Long tableId) {
        List<Reservation> entList = reservationRepository.findByTableId(tableId);
        return mapper.toReservationDto(entList);
    }

    @Transactional(readOnly = true)
    @Override
    public void fromLessThanToDates(TimesLot timesLot, IDateTime dateTime)  {
        Boolean compare = dateTime.compare(timesLot.getCheck_in(), timesLot.getCheck_out());
        if (compare) {
            return;
        }

    }

    private void setTransientFields(Reservation reservationEntity) {
        reservationEntity.setTable(entityManager.getReference(Tables.class, reservationEntity.getTable().getId()));
    }
    public List<ReservationDto> findAll() {
        return mapper.toReservationDto(reservationRepository.findAll());
    }

    @Override
    public List<Reservation> findConflictingReservations(LocalDateTime checkIn, LocalDateTime checkOut) {
        return reservationRepository.findConflictingReservations(checkIn, checkOut);
    }

    @Override
    public List<ReservationDto> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }
}