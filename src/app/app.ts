import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tasks} from './tasks/tasks';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'Lista zadań do wykonania';
}
