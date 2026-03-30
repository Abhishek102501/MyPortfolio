package com.contact.backend.controller;

import com.contact.backend.model.ContactRequest;
import com.contact.backend.service.ContactService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public String handleContact(@RequestBody ContactRequest request) {
        return service.processMessage(request);
    }
}