package com.contact.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class ContactRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ✅ SETTERS
    // ✅ GETTERS
    @Setter
    @Getter
    private String name;
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String message;

}