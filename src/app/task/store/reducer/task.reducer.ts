import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from '../action/task.actions';
import {Task} from '../../../models/task';

export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask,
    (state: TaskState, {task}) =>
      ({...state,
        tasks: [...state.tasks, task]
      }))
);

export function reducer(state: TaskState | undefined, action: Action): any {
  return taskReducer(state, action);
}
