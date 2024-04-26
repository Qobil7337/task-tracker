import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent {
  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    title:[''],
    name:[''],
    priority:[''],
    status:[''],
    performers:[[]],
    deadline:[''],
  });

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}
