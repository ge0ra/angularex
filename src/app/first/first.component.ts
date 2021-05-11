import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private formBuilder: FormBuilder) { }

  customLabel = 'write something in the input field to change this label';
  jobForm = this.formBuilder.group({
    name: ''
  });

  onSubmit(): void {
    this.customLabel = this.jobForm.controls.name.value;
  }
}
