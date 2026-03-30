package com.contact.backend.service;

import com.contact.backend.model.ContactRequest;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    public String processMessage(ContactRequest request) {
        System.out.println("Name: " + request.getName());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Message: " + request.getMessage());

        return "Message received successfully!";
    }
}