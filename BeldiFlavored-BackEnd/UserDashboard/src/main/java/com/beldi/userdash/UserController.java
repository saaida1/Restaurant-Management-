package com.beldi.userdash;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin
    @GetMapping("/get-user")
    public User getUser(@RequestParam Integer id) {
        return this.userService.getUser(id);
    }
    @CrossOrigin
    @PostMapping("/update-user")
    public User updateUser(@RequestBody User user) {
        return this.userService.updateUser(user);
    }

    @CrossOrigin
    @GetMapping("/get")
    public String get() {
        return "Get succeeded !";
    }
}
