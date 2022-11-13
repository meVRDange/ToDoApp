import { Component, ViewChild } from '@angular/core';
import { ToDo } from './to-do';
import { ToDoLstComponent } from './to-do-lst/to-do-lst.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  // @ViewChild(ToDoLstComponent) todolistcomponent!: ToDoLstComponent;

  constructor() { }
}
