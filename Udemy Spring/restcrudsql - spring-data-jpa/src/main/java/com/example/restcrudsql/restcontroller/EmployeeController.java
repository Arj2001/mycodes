package com.example.restcrudsql.restcontroller;

import com.example.restcrudsql.entity.Employee;
import com.example.restcrudsql.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {

//    private EmployeeDao employeeDao;
//
//    @Autowired
//    public EmployeeController(EmployeeDao employeeDao){
//        this.employeeDao = employeeDao;
//    }
    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
//        return employeeDao.findAll();
        return employeeService.findAll();
    }

    @GetMapping("/employees/{employeeId}")
    public Employee getEmployeeById(@PathVariable int employeeId){
        Employee employee = employeeService.findById(employeeId);
        if(employee == null){
            throw new RuntimeException("Employee id not found - " + employeeId);
        }
        return employee;
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.save(employee);
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee){
        if(employee.getId() == 0){
            throw new RuntimeException("Has to specify the id");
        }
        if(employeeService.findById(employee.getId()) == null){
            throw new RuntimeException("Employee not found for id - " + employee.getId());
        }
        return employeeService.save(employee);
    }

    @DeleteMapping("/employees/{employeeId}")
    public void deleteEmployee(@PathVariable int employeeId){
        if(employeeService.findById(employeeId) == null){
            throw new RuntimeException("Employee not found for id - " + employeeId);
        }
        employeeService.deleteById(employeeId);
    }
}
