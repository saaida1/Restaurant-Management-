package com.restaurant.menu_service.rest;

import com.restaurant.menu_service.model.Menu;
import com.restaurant.menu_service.service.Implement.MenuServiceImplement;
import com.restaurant.menu_service.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private MenuServiceImplement menuService;

    @GetMapping("/items")
    public List<Menu> getAllMenu(){
        return menuService.getAllMenuItems();
    }

    @GetMapping("/items/{id}")
    public Menu getMenuById(@PathVariable Long id){
        return menuService.getMenuById(id);
    }


}
