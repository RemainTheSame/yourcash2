package com.yourcash2.yourcash2.controller;

import com.yourcash2.yourcash2.model.Expense;
import com.yourcash2.yourcash2.model.User;
import com.yourcash2.yourcash2.repository.ExpenseRepository;
import com.yourcash2.yourcash2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    private final ExpenseRepository eR;
    private final UserRepository uR;

    @Autowired
    public RestController(ExpenseRepository eR, UserRepository uR) {
        this.eR = eR;
        this.uR = uR;
    }

    //Get all users
    @GetMapping("/users")
    List<User> users(){
        return uR.findAll();
    }

    //Add new user
    @PostMapping("/users")
    User newUser(@RequestBody User newUser){
        return uR.save(newUser);
    }

    //Find by id
    @GetMapping("/users/{id}")
    User one(@PathVariable Long id) {

        return uR.findById(id).orElse(null);
    }

    //Edit by id
    @PutMapping("/users/{id}")
    User replaceEmployee(@RequestBody User newUser, @PathVariable Long id) {

        return uR.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUsername(newUser.getUsername());
                    user.setPassword(newUser.getPassword());
                    return uR.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return uR.save(newUser);
                });
    }

    //Delete by id
    @DeleteMapping("/users/{id}")
    void deleteEmployee(@PathVariable Long id) {
        uR.deleteById(id);
    }
    //<<<<<<<<<<<<<<<<<<          >>>>>>>>>>>>>>>>>>>
    //<<<<<<<<<<<<<<<<<< EXPENSES >>>>>>>>>>>>>>>>>>>
    //<<<<<<<<<<<<<<<<<<          >>>>>>>>>>>>>>>>>>>

    //Get all expenses
    @GetMapping("/expenses")
    List<Expense> expenses(){
        return eR.findAll();
    }

    //Add new expense
    @PostMapping("/expenses")
    Expense newExpense(@RequestBody Expense newExpense){
        return eR.save(newExpense);
    }

    //Find by id
    @GetMapping("/expenses/{id}")
    Expense expense(@PathVariable Long id) {

        return eR.findById(id).orElse(null);
    }

    //Edit by id
    @PutMapping("/expenses/{id}")
    Expense replaceExpense(@RequestBody Expense newExpense, @PathVariable Long id) {

        return eR.findById(id)
                .map(expense -> {
                    expense.setAppuser(newExpense.getAppuser());
                    expense.setCost(newExpense.getCost());
                    expense.setTime(newExpense.getTime());
                    expense.setCategory(newExpense.getCategory());
                    expense.setDescription(newExpense.getDescription());
                    return eR.save(expense);
                })
                .orElseGet(() -> {
                    newExpense.setId(id);
                    return eR.save(newExpense);
                });
    }

    //Delete by id
    @DeleteMapping("/expenses/{id}")
    void deleteExpense(@PathVariable Long id) {
        eR.deleteById(id);
    }

    //Find by current user
    @GetMapping("/expenses/findbyuser/{username}")
    List<Expense>userExpenses(@PathVariable String username){
        //LoginController lC = new LoginController(uR);
        List<Expense>userExpenses = new ArrayList<>();
        for (Expense expense:eR.findAll()
             ) {
            if(expense.getAppuser().equals(username)){
                userExpenses.add(expense);
            }

        }
        return userExpenses;
    }

}
