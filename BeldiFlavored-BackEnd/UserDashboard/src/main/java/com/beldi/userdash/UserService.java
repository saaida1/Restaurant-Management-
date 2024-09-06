package com.beldi.userdash;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser(Integer id) {
        List<User> users = this.userRepository.findAll();
        User user = null;
        for (int i = 0; i < users.toArray().length; i++) {
            if(users.get(i).getId() == id) {
                user = users.get(i);
                System.out.println(user);
                System.out.println("User found it");
                break;
            }
        }
        if (user != null)
            return user;
        return new User();
    }
    public User updateUser(User userUpdate) {
        List<User> users = this.userRepository.findAll();
        if(userUpdate != null) {
            for (int i = 0; i < users.toArray().length; i++) {
                if (users.get(i).getId() == userUpdate.getId()) {
                    System.out.println("User updated it");
                    return this.userRepository.save(userUpdate);
                }
            }
        }
        return new User();
    }
}
