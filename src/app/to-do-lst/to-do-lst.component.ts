import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-lst',
  templateUrl: './to-do-lst.component.html',
  styleUrls: ['./to-do-lst.component.css']
})
export class ToDoLstComponent implements OnInit {

  constructor() { }

  @Input()
  todolist: ToDo[] = [];

  ngOnInit(): void {
  }

}
