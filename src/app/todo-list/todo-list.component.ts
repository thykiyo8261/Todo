import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  num = 4;

  task : any[] =[
    {
      "name" : "Make schedule for today"
    },
    {
      "name" : "Submit assignments"
    },
    {
      "name" : "Prepare for classes"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
