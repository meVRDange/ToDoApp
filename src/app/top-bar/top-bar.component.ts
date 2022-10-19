import { getLocaleEraNames } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() addToDoEvent = new EventEmitter<ToDo>();

  todo: ToDo = {
    toDoId: 0,
    toDoText: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  addToDo(): void {
    console.log(this.todo);
    if (this.todo.toDoText.length == 0) {
      alert("Please enter some text");
      return;
    }
    this.todo.toDoId++;
    let a={...this.todo}
    this.addToDoEvent.emit(a);
    this.todo.toDoText="";
  }
}