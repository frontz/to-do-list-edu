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
      id: 35,
      name: 'Posprzątać dom',
      done: false
    },
    {
      id: 3,
      name: 'Wyprowadzić psa',
      done: false
    },
    {
      id: 57,
      name: 'Przeczytać rozdział książki "Angular"',
      done: false
    },
  ];
  getTasks(): Task[] {
    return this.tasks;
  }
}
