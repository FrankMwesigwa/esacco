package com.esacco.modules.common;

import com.esacco.modules.model.AppUser;
import com.esacco.modules.repository.AppUserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityService {

    private AppUserRepository userRepository;

    public AppUser getCurrentUser() {
        UserDetails userDetails = UserDetails.class.cast(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        String username = userDetails.getUsername();
        return userRepository.findByUsername(username);
    }
}
