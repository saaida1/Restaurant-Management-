package com.restaurant.admin.controller;

import com.restaurant.admin.entity.Order;
import com.restaurant.admin.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/list")
    public ResponseEntity<List<Order>> listOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }
}
