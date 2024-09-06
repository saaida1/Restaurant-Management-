package com.BeldiFlavored.ReservationTables.mapper;


import com.BeldiFlavored.ReservationTables.dto.TablesDto;
import com.BeldiFlavored.ReservationTables.model.*;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component

public final class TablesMapper {
    public Tables toEntity(TablesDto tablesDto){
        return new Tables(
                tablesDto.getId(),
                tablesDto.getName(),
                tablesDto.getReservations()
        );
    }

    public TablesDto toDto(Tables tables){
        return TablesDto.builder()
                .id(tables.getId())
                .name(tables.getName())
                .reservations(tables.getReservations())
                .build();
    }
    public List<Tables> toTablesEntity(List<TablesDto> listTablesDto){
        return listTablesDto.stream().map(this::toEntity).collect(Collectors.toList());
    }
    public List<TablesDto> toTablesDto(List<Tables> listTables){
        return listTables.stream().map(this::toDto).collect(Collectors.toList());
    }
    public Tables updateEntity(TablesDto tablesDto, Tables tables){
        tables.setName(tablesDto.getName());
        tables.setReservations(tablesDto.getReservations());
        return tables;
    }

}

