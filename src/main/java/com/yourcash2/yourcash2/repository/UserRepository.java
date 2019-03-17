package com.yourcash2.yourcash2.repository;

import com.yourcash2.yourcash2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
