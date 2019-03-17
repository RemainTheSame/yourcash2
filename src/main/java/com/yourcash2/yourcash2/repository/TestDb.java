package com.yourcash2.yourcash2.repository;

import com.yourcash2.yourcash2.model.Expense;
import com.yourcash2.yourcash2.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TestDb implements CommandLineRunner {

    private final ExpenseRepository eR;
    private final UserRepository uR;

    @Autowired
    public TestDb(ExpenseRepository eR, UserRepository uR) {
        this.eR = eR;
        this.uR = uR;
    }


    @Override
    public void run(String... args) throws Exception {
        eR.save(new Expense("username",22,"xx/xx/xx xx:xx:xx","test","Just a test expense"));
        eR.save(new Expense("2username2",33,"xx/xx/xx xx:xx:xx","test","test2 expense"));
        eR.save(new Expense("2username2",44,"xx/xx/xx xx:xx:xx","test","test3 expense"));
        uR.save(new User("username","testname","pass"));
        uR.save(new User("2username2","2testname2","pass"));
        uR.save(new User("3username3","3testname3","pass"));
    }
}
