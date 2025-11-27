import { Injectable } from '@angular/core';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Pouczyć się Angulara',
      done: true
    },
    {
      id: 2,
      name: 'Posprzątać dom',
      done: false
    },
    {
      id: 3,
      name: 'Wyprowadzić psa',
      done: false
    },
  ];

  getTasks() {
    return this.tasks;
  }

}
