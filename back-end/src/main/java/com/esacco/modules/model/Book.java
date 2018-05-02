package com.esacco.modules.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
    private String year;
    private String isbn;
    private String price;

    @ManyToOne
    private AppUser createdBy;

    private @Version
    @JsonIgnore
    Long version;

    public Book() {
    }

    public Book(String title, String author, String year, String isbn, AppUser createdBy, String price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
        this.price = price;
        this.createdBy = createdBy;
    }

}

