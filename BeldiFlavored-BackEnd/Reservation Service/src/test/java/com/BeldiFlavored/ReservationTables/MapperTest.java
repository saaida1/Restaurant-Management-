package com.BeldiFlavored.ReservationTables;

import com.BeldiFlavored.ReservationTables.dto.CategorieDTO;
import com.BeldiFlavored.ReservationTables.dto.ProduitDTO;
import com.BeldiFlavored.ReservationTables.mapper.CategorieMapper;
import com.BeldiFlavored.ReservationTables.mapper.ProduitMapper;
import com.BeldiFlavored.ReservationTables.model.Categorie;
import com.BeldiFlavored.ReservationTables.model.Produit;
import com.BeldiFlavored.ReservationTables.model.Promo;
import com.example.tp.dto.*;
import com.example.tp.mapper.*;
import com.example.tp.model.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

class MapperTest {

    @Test
     void toDtoTestProduit(){
        Produit p = new Produit(1L,"pr1","100","200");
        ProduitDTO pdto = new ProduitMapper().toDTO(p);
        Assertions.assertEquals(p.getId(),pdto.getId());
        Assertions.assertEquals(p.getName(),pdto.getName());
        Assertions.assertEquals(p.getPrixMax(),pdto.getPrixMax());
        Assertions.assertEquals(p.getPrixMin(),pdto.getPrixMin());
    }

    @Test
    void toDtoTestCategorie(){
        List<Produit>  p = new ArrayList<>();
        p.add(new Produit(1L,"pr1","100","200"));
        p.add(new Produit(2L,"pr2","100","200"));
        Categorie c = new Categorie(1L ,"Pr_categorie1",p,new Promo());
        CategorieDTO cdto = new CategorieMapper().toDTO(c);
        Assertions.assertEquals(c.getId(),cdto.getId());
        Assertions.assertEquals(c.getProduits(),cdto.getProduits());

    }
    @Test
    void toDtoTestProduitCategorie(){}
    @Test
    void toDtoTestProduitCategorie2(){
        Categorie c = new Categorie();
        c.setId(1L);

    }
    @Test
    void toDtoTestProduitCategorie3(){}
}
