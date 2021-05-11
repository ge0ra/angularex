import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTask from '../reducer/task.reducer';

export const selectTaskState = createFeatureSelector<fromTask.TaskState>(
  fromTask.taskFeatureKey,
);

export const selectTasks = createSelector(
  selectTaskState,
  (state: fromTask.TaskState) => state.tasks
);
