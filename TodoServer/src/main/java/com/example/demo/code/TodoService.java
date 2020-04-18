package com.example.demo.code;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	public List<Todo> getAllTodos(){
		List<Todo> todos = (List<Todo>) todoRepository.findAll();
		return todos;
	}
	
	public void createTodo(Todo todo) {
		todoRepository.save(todo);
	}

	public void deleteTodo(Integer id) {
		todoRepository.deleteById(id);
	}
	
	public Todo updateTodo(Todo todo) {
		Todo newTodo = todoRepository.findAllById(todo.getId());
		newTodo.setName(todo.getName());
		return todoRepository.save(newTodo);
	}

}
