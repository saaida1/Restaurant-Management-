package com.BeldiFlavored.ReservationTables.model;


import com.BeldiFlavored.ReservationTables.util.TimesLot;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "RES_RESERVATION")
public class Reservation {

    @Id
    @Column(name = "RES_RSRV_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    public TimesLot timesLot;

   // @JoinColumn(foreignKey = @ForeignKey(name = "RES_CUST_RSRV_ID"), name = "RES_CUST_ID", referencedColumnName = "RES_CUST_ID")
   // @ManyToOne(fetch = FetchType.LAZY, optional = false)
   // private CustomerEntity customer;

    @JoinColumn(foreignKey = @ForeignKey(name = "RES_TABL_RSRV_ID"), name = "RES_TABL_ID", referencedColumnName = "RES_TABL_ID")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Tables table;

}
