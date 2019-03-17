package com.yourcash2.yourcash2.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Expense {

    @Id @GeneratedValue Long id;
    private String appuser;
    private double cost;
    private String time;
    private String category;
    private String description;

    public Expense() {
    }

    public Expense(String appuser, double cost, String time, String category, String description) {
        this.appuser = appuser;
        this.cost = cost;
        this.time = time;
        this.category = category;
        this.description = description;
    }
}
