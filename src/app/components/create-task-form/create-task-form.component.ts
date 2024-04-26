import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Priority} from "../../enums/priority.enum";
import {Status} from "../../enums/status.enum";

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent {
  priorities = Object.values(Priority); // Get array of enum values
  statuses = Object.values(Status); // Get array of enum values
  constructor(private formBuilder:FormBuilder){}

  taskForm = this.formBuilder.group({
    title:['', [Validators.required]],
    name:['', [Validators.required]],
    priority:['', [Validators.required]],
    status:['', [Validators.required]],
    performer:['', [Validators.required]],
    deadline:['', [Validators.required]],
  });

  saveForm(){
    console.log('Form data is ', this.taskForm.value);
    console.log(this.priorities)
    console.log(this.statuses)
  }
}
