package com.contact.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String name, String email, String message) {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("abhi.shek.897984@gmail.com"); // your email here
        mail.setSubject("New Contact Message 🚀");

        mail.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Message: " + message
        );

        mailSender.send(mail);
    }
}