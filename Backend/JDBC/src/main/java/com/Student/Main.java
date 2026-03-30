package com.Student;

import java.sql.Connection;
import java.sql.DriverManager;

public class Main {
    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "mysql";

        try {
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("✅ Connected successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}