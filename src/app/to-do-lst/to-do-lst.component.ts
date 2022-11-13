import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../services/todoservices/todo.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-lst',
  templateUrl: './to-do-lst.component.html',
  styleUrls: ['./to-do-lst.component.css']
})
export class ToDoLstComponent implements OnInit {

  constructor(private todoservice: TodoService) { }

  
  todolist: ToDo[] = this.todoservice.getToDo();

  ngOnInit(): void { 
  }
  deleteTodo(id : number): void {
    this.todoservice.removeToDo(id);
    this.todolist=this.todoservice.getToDo();
  }

}
