import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormGroupDirective} from "@angular/forms";
import {Priority} from "../../enums/priority.enum";
import {Status} from "../../enums/status.enum";
import {TaskApiService} from "../../services/api/task.api.service";

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent implements OnInit {
  @ViewChild(FormGroupDirective, {static: false}) formGroupDirective: FormGroupDirective;
  taskForm: FormGroup
  isCreateButtonLoading = false
  priorities = Object.values(Priority); // Get array of enum values
  statuses = Object.values(Status);
  constructor(private formBuilder:FormBuilder,
              private _taskService: TaskApiService,
              ){}
  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title:['', [Validators.required]],
      name:['', [Validators.required]],
      priority:['', [Validators.required]],
      status:['', [Validators.required]],
      performer:['', [Validators.required]],
      deadline:['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isCreateButtonLoading = true
    const taskData = { ...this.taskForm.value, id: this.generateRandomId() };
    this._taskService.create('tasks', taskData).subscribe({
      next: value => {
        this.formGroupDirective.resetForm()
        this.isCreateButtonLoading = false
      },
      error: err => {}
    })
  }

  private generateRandomId(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }
}
