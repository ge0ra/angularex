import { Component } from '@angular/core';
import {Task} from '../../models/task';
import {select, Store} from '@ngrx/store';
import {TaskState} from '../store/reducer/task.reducer';
import {addTask} from '../store/action/task.actions';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  constructor(private store: Store<TaskState>) {}

  addTask(taskTitle: string): void {
    const task = new Task();
    task.title = taskTitle;
    this.store.dispatch(addTask(task));
  }
}
