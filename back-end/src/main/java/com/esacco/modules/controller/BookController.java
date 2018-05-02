package com.esacco.modules.controller;

import com.esacco.modules.model.AppUser;
import com.esacco.modules.model.Book;
import com.esacco.modules.model.BookDto;
import com.esacco.modules.repository.AppUserRepository;
import com.esacco.modules.repository.BookRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class BookController {

    private BookRepository bookRepository;
    private AppUserRepository userRepository;

    public BookController(BookRepository bookRepository, AppUserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/books")
    public List<Book> getAccounts() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public Book createAccount(@RequestBody BookDto bookDto) {

        Book book = new Book();

        UserDetails userDetails = UserDetails.class.cast(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        String username = userDetails.getUsername();
        AppUser currentUser = userRepository.findByUsername(username);

        book.setAuthor(bookDto.getAuthor());
        book.setPrice(bookDto.getPrice());
        book.setTitle(bookDto.getTitle());
        book.setYear(bookDto.getYear());
        book.setCreatedBy(currentUser);

        return bookRepository.save(book);
    }
}
