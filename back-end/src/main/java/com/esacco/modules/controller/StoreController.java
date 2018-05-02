package com.esacco.modules.controller;


import com.esacco.modules.model.AppUser;
import com.esacco.modules.repository.BookRepository;
import com.esacco.modules.service.UserService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.ManyToOne;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class StoreController {
    @Autowired
    @ManyToOne
    @JsonIgnore
    private BookRepository repository;

    @Autowired
    private UserService userService;

    // Rest Api provider methods

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void saveUser(@RequestBody AppUser user) {
        userService.save(user);
    }


}

