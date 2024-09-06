package com.BeldiFlavored.ReservationTables.util;

import java.time.LocalDateTime;

/**
 * Check two dates.
 */
@FunctionalInterface
public interface IDateTime {

    Boolean compare(LocalDateTime from, LocalDateTime to);

}