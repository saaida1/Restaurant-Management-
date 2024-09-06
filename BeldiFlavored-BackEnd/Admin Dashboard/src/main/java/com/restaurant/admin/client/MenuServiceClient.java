package com.restaurant.admin.client;

import com.restaurant.admin.entity.Menu;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "menu-service")
public interface wMenuServiceClient {
    @PostMapping("/menu/items")
    Menu addMenuItem(@RequestBody Menu menu);
}
