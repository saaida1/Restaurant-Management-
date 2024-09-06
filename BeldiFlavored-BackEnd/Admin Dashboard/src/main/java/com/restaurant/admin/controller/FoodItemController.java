package com.restaurant.admin.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.restaurant.admin.entity.FoodItem;
import com.restaurant.admin.service.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodItemController {
    @Autowired
    private FoodItemService foodItemService;

    @PostMapping("/add")
    public ResponseEntity<?> addFoodItem(@RequestParam("foodItem") String foodItemJson, @RequestParam("image") MultipartFile image) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            FoodItem foodItem = objectMapper.readValue(foodItemJson, FoodItem.class);
            FoodItem savedItem = foodItemService.addFoodItem(foodItem, image);
            return ResponseEntity.ok(savedItem);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Error parsing JSON");
        }
    }


    @GetMapping("/list")
    public ResponseEntity<List<FoodItem>> getFoodList() {
        List<FoodItem> foodList = foodItemService.getAllFoodItems();
        return ResponseEntity.ok(foodList);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> removeFoodItem(@PathVariable Long id) {
        try {
            foodItemService.removeFoodItem(id);
            return ResponseEntity.ok("Food item removed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error removing food item");
        }
    }

}
