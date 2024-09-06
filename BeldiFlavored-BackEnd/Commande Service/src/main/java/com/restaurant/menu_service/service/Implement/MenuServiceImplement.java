package com.restaurant.menu_service.service.Implement;

import com.restaurant.menu_service.model.Menu;
import com.restaurant.menu_service.repository.MenuRepository;
import com.restaurant.menu_service.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImplement implements MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public List<Menu> getAllMenuItems(){
    return menuRepository.findAll();
    }

    public Menu getMenuById(Long id){
        return menuRepository.findById(id).orElse(null);
    }

    public Menu saveMenu(Menu menu){
        return menuRepository.save(menu);
    }

    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }

}
