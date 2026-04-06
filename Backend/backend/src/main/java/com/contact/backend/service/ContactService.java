package com.contact.backend.service;

import com.contact.backend.model.ContactRequest;
import com.contact.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    @Autowired
    private EmailService emailService;

    public String processMessage(ContactRequest contact) {

        repository.save(contact);

        emailService.sendEmail(
                contact.getName(),
                contact.getEmail(),
                contact.getMessage()
        );

        return "Saved + Email Sent ✅";
    }
}