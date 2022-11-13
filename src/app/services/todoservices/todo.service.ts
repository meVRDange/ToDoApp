import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist: ToDo[] = [];

  todo: ToDo = {
    toDoId: 0,
    toDoText: ""
  }

  constructor() { }

  getToDo() {
    return this.todolist;
  }

  addToDo(toDoText :string) : void {
    if (toDoText.length == 0) {
      alert("Please enter some text");
      return;
    }
    this.todo.toDoId++;
    this.todo.toDoText =toDoText;
    let a = {...this.todo}
    this.todolist.push(a);
  }

  removeToDo(id : number) : void {
    this.todolist = this.todolist.filter(obj => obj.toDoId !== id);
    this.todo.toDoId--;
  }
}
