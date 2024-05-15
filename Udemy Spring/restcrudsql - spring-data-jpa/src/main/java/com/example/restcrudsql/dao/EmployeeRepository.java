package com.example.restcrudsql.dao;

import com.example.restcrudsql.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
