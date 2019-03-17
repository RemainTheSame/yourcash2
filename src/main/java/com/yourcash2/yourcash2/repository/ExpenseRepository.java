package com.yourcash2.yourcash2.repository;

import com.yourcash2.yourcash2.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
