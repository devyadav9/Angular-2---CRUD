import { Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import { FormControl, FormGroup} from '@angular/forms';
import { Todo } from './Todo';
@Component({
  selector: 'todo',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {
todos : Todo[];
id : Number;
editMode = false;
statusCode : Number;
todoForm = new FormGroup({
  name: new FormControl()	   
});
  constructor(private _todoService : TodoService){
}
ngOnInit(): void {
  this.getAllTodos();
}   

getAllTodos() {
     this._todoService.getAllTodos()
  .subscribe(data => this.todos = data);
}

onTodoFormSubmit() {
  console.log('todo created !!');
  let name = this.todoForm.get('name').value.trim();
  let todo = new Todo(null, name);
  this._todoService.createTodo(todo)
	      .subscribe(successCode => {
		              this.statusCode = successCode;
			      this.getAllTodos();	
      });  +
      this.todoForm.setValue({ name : '' });
 }

 onTodoDelete(id : number){
   console.log('todo deleted !!')
  this._todoService.deleteTodoById(id)
	      .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllTodos();
        });
 }

 OnTodoUpdate(todo : Todo){
   console.log('todo update')
    this.id = todo.id;
    this.todoForm.setValue({ name : todo.name });
    this.editMode = true;
 }

 OnUpdateSave(){
  let name = this.todoForm.get('name').value.trim();
  let todo = new Todo(this.id, name);
  this._todoService.updateTodo(todo)
	      .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllTodos();
        });
    this.editMode = false; 
    this.todoForm.setValue({ name : '' });
 }

}