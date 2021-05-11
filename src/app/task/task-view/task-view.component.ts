import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../../models/task';
import {select, Store} from '@ngrx/store';
import {selectTasks} from '../store/selector/task.selectors';
import {TaskState} from '../store/reducer/task.reducer';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  tasks$: Observable<Task[]>;

  constructor(private store: Store<TaskState>) {
    this.tasks$ = this.store.pipe(select(selectTasks));
  }
}
