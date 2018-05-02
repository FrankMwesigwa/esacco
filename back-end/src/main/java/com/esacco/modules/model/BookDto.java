package com.esacco.modules.model;

import lombok.Data;

@Data
public class BookDto {

    private Long id;
    private String title;
    private String author;
    private String year;
    private String isbn;
    private String price;
    private Long    userId;
}
