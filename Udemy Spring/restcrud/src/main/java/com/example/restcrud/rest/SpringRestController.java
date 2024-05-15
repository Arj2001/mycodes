package com.example.restcrud.rest;

import com.example.restcrud.Expections.StudentNotFoundException;
import com.example.restcrud.entity.Student;
import com.example.restcrud.entity.StudentErrorResponse;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SpringRestController {

    List<Student> students = new ArrayList<>();

    @PostConstruct
    public void loadData(){
        students.add(new Student("Arjun", "Raju"));
        students.add(new Student("Arun", "Raju"));
        students.add(new Student("Tuttu", "Kuttan"));
        students.add(new Student("Pottan", "Tuttu"));
    }

    @GetMapping("/students")
    public List<Student> getStudents(){

        return students;
    }

    @GetMapping("/students/{studentId}")
    public Student getStudent(@PathVariable int studentId){

        if((studentId >= students.size()) || (studentId < 0)){
            throw new StudentNotFoundException("Student not found for id - " + studentId);
        }
       return students.get(studentId);
    }


}
