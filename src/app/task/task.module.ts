import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskAddComponent } from './task-add/task-add.component';
import {StoreModule} from '@ngrx/store';
import {taskFeatureKey, reducer} from './store/reducer/task.reducer';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TaskViewComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(taskFeatureKey, reducer),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    TaskViewComponent,
    TaskAddComponent
  ]
})
export class TaskModule { }
