import {Component, OnInit} from '@angular/core';
import { Task } from "../Task";
import {TasksService} from '../services/tasks-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit{

  constructor(private taskService: TasksService) { }

  tasks: Task[] = [];
  protected newTaskName: any;

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
      return 0; // albo 0 – zależnie od logiki
    }
    return Math.max(...tasks.map(t => t.id));
  }


  protected addTask() {
      let task: Task = {id: this.getMaxTaskId(this.tasks) + 1, name: this.newTaskName, done: false};
      this.tasks.push(task);
      this.newTaskName = '';
  }
}

export default Tasks;
