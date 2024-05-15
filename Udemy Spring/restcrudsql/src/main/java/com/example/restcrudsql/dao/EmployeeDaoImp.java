package com.example.restcrudsql.dao;

import com.example.restcrudsql.entity.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDaoImp implements EmployeeDao{

    private EntityManager entityManager;

    @Autowired
    public EmployeeDaoImp(EntityManager entityManager){
        this.entityManager = entityManager;
    }
    @Override
    public List<Employee> findAll() {

        TypedQuery<Employee> theQuery = entityManager.createQuery("from Employee", Employee.class);

        return theQuery.getResultList();
    }

    @Override
    public Employee save(Employee employee) {
        return entityManager.merge(employee);  //merge save/insert if id is 0 else update
    }

    @Override
    public void deleteById(int id) {
        Employee employee = entityManager.find(Employee.class, id);
        entityManager.remove(employee);
    }

    @Override
    public Employee findById(int id) {
        return entityManager.find(Employee.class, id);
    }
}
