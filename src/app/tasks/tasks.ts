import {Component, OnInit} from '@angular/core';
import { Task } from "../Task";
import {TasksService} from '../services/tasks-service';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit{

  constructor(private taskService: TasksService) { }

  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }


}
