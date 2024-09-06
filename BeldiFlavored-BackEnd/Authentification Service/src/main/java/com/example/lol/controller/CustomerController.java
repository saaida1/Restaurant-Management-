package com.example.lol.controller;


import com.example.lol.model.Customer;
import com.example.lol.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/customer")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class CustomerController {

    @Autowired
    private final CustomerService customerService;

    @GetMapping("/all")
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

//    @GetMapping("/get")
//    public Customer getCustomer(@RequestParam(name = "email") String email,
//                                @RequestParam(name = "password") String password) {
//        return customerService.getCustomer(email,password);
//    }
@GetMapping("/get")
public ResponseEntity<?> getCustomer(@RequestParam(name = "email") String email,
                                     @RequestParam(name = "password") String password) {
    boolean isValid = customerService.validateCustomer(email, password);
    if (isValid) {
        return ResponseEntity.ok("Login successful");
    } else {
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

    @PostMapping("/add")
    public void registerNewCustomer(@RequestBody Customer customer) {
        customerService.addNewCustomer(customer);
    }

    @DeleteMapping("/delete")
    public void deleteCustomerByEmail(@RequestParam(name = "email") String email) {
        customerService.deleteCustomerByEmail(email);
    }
    @GetMapping("/test")
    public String testEndpoint() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return "Authenticated as: " + authentication.getName();
    }
}
