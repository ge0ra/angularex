import { createAction, props } from '@ngrx/store';
import {Task} from '../../../models/task';

export const loadTasks = createAction(
  '[Task] Load Tasks'
);

export const addTask = createAction(
  '[Task] Add Task',
  (task: Task) => ({task})
);
