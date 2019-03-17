package com.yourcash2.yourcash2.controller;

import com.sun.org.apache.xpath.internal.operations.Bool;
import com.yourcash2.yourcash2.model.User;
import com.yourcash2.yourcash2.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
public class LoginController {

    private User current;

    private final UserRepository uR;

    public LoginController(UserRepository uR) {
        this.uR = uR;
    }

    @GetMapping("/login/{username}/{password}")
    Boolean login(@PathVariable("username") String username, @PathVariable("password") String password){
        for (User user:uR.findAll()
             ) {
            if(user.getUsername().equals(username) && user.getPassword().equals(password)){
                current = user;
                return true;
            }
        }
        return false;
    }

    @GetMapping("/current")
    String current(){
        if(current == null)
            return "";
        else {
            return current.getName();
        }
    }

    @GetMapping("/current/username")
    String currentUsername(){
        if(current == null)
            return "";
        else {
            return current.getUsername();
        }
    }

    @PostMapping("/register")
    Boolean register(@RequestBody User reguser){
        for (User user:uR.findAll()
             ) {
            if(user.getUsername().equals(reguser.getUsername())){
                return false;
            }else{
                uR.save(reguser);
                return true;
            }

        }
        return false;
    }
}
