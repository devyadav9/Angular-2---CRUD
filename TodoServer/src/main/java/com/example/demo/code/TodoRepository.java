package com.example.demo.code;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Integer>{

	Todo findAllById(Integer id);

}
