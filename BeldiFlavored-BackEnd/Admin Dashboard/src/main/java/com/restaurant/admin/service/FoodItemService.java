package com.restaurant.admin.service;

import com.restaurant.admin.client.MenuServiceClient;
import com.restaurant.admin.entity.FoodItem;
import com.restaurant.admin.entity.Menu;
import com.restaurant.admin.repository.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class FoodItemService {
    @Autowired
    private FoodItemRepository foodItemRepository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private MenuServiceClient menuServiceClient;

    @Transactional
    public FoodItem addFoodItem(FoodItem foodItem, MultipartFile image) throws IOException {
        // Save food item to the admin database
        FoodItem savedItem = foodItemRepository.save(foodItem);

        // Prepare the menu item to send to the Menu Display Service
        Menu menu = new Menu();
        menu.setId(savedItem.getId());
        menu.setName(savedItem.getName());
        menu.setDescription(savedItem.getDescription());
        menu.setPrice(savedItem.getPrice());
        menu.setCategory(savedItem.getCategory());
        menu.setCover(savedItem.getImage());
        menu.setAmount(1);  // Or any default value

        // Send the menu item using Feign client
        menuServiceClient.addMenuItem(menu);

        return savedItem;
    }

    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    @Transactional
    public void removeFoodItem(Long id) {
        foodItemRepository.deleteById(id);
    }
}

