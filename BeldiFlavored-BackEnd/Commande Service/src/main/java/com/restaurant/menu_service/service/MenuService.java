package com.restaurant.menu_service.service;

import com.restaurant.menu_service.model.Menu;

import java.util.List;

public interface MenuService {
    public List<Menu> getAllMenuItems();
    public Menu getMenuById(Long id);
    public Menu saveMenu(Menu menu);
    public void deleteMenu(Long id);
}
