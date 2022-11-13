import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../services/todoservices/todo.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() addToDoEvent = new EventEmitter<ToDo>();
 

  toDoText :string ="";
  constructor(private todoservice :TodoService) { }

  ngOnInit(): void {
  }

  addToDo(): void {
    this.todoservice.addToDo(this.toDoText);
    this.toDoText = "";
  }
}