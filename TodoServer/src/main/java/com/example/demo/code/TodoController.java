package com.example.demo.code;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Todo>> getAllTodos(){
		return new ResponseEntity<List<Todo>>(todoService.getAllTodos(), HttpStatus.OK);
	}
	
	@PostMapping("/all")
	public ResponseEntity<Void> createTodo(@RequestBody Todo todo){
		todoService.createTodo(todo);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PutMapping("/all")
	public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo){
		return new ResponseEntity<Todo>(todoService.updateTodo(todo), HttpStatus.OK);
	}
	
	@DeleteMapping("/all/{id}")
	public void deleteTodo(@PathVariable Integer id){
		todoService.deleteTodo(id);
	}
}
