import {Component, input, OnInit} from '@angular/core';
import { Task } from "../Task";
import {TasksService} from '../services/tasks-service';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Form} from '../form/form';

@Component({
  selector: 'app-tasks',
  imports: [
    FormsModule,
    NgClass,
    Form
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit{

  constructor(private taskService: TasksService) { }

  title = input<string>('Zadania');

  tasks: Task[] = [];
  newTaskName: string = '';

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  changeStatus(task: Task) {
    task.done = !task.done;
  }

  getMaxTaskId(tasks: Task[]) {
    if (!tasks || tasks.length === 0) {
      return 0;
    }
    return Math.max(...tasks.map(task => task.id));
  }


  // protected addTask() {
  //     let task: Task = {id: this.getMaxTaskId(this.tasks) + 1, name: this.newTaskName, done: false};
  //     this.tasks.push(task);
  //     this.newTaskName = '';
  // }

  protected getTaskName($event: string) {
    this.newTaskName = $event;
    let task: Task = {id: this.getMaxTaskId(this.tasks) + 1, name: this.newTaskName, done: false};
    this.tasks.push(task);
  }
}

export default Tasks;
