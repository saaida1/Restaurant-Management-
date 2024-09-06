package com.BeldiFlavored.ReservationTables;

import com.BeldiFlavored.ReservationTables.model.Tables;
import com.BeldiFlavored.ReservationTables.repository.ReservationRepository;
import com.BeldiFlavored.ReservationTables.repository.TablesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class ReservationApplication implements CommandLineRunner {
    @Autowired
    TablesRepository tablesRepository;
    public static void main(String[] args) {
        SpringApplication.run(ReservationApplication.class, args);
    }
    @Override
    public void run(String... args) throws Exception {
        if(tablesRepository.count() == 0){
            tablesRepository.save(new Tables("table1"));
            tablesRepository.save(new Tables("table2"));
            tablesRepository.save(new Tables("table3"));
            tablesRepository.save(new Tables("table4"));
            tablesRepository.save(new Tables("table5"));
            log.info("Application started successfully");
        }

    }

}
