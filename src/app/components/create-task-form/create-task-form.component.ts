import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Priority} from "../../enums/priority.enum";
import {StatusEnum} from "../../enums/status.enum";

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent {
  priorities = Object.values(Priority); // Get array of enum values
  statuses = Object.values(StatusEnum); // Get array of enum values
  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    title:[''],
    name:[''],
    priority:[''],
    status:[''],
    performer:[''],
    deadline:[''],
  });

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    console.log(this.priorities)
    console.log(this.statuses)
  }

  protected readonly Priority = Priority;
}
