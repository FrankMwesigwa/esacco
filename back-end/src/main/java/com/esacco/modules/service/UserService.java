package com.esacco.modules.service;


import com.esacco.modules.model.AppUser;

public interface UserService {
    void save(AppUser newUser);
    AppUser findById(Long id);
    AppUser findOne(String username);
}
