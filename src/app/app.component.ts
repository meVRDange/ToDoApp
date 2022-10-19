import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';


  todolist :ToDo[] = [];

  addToDo(todo :ToDo) : void {
    this.todolist.push(todo);
  }
}
