import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {Priority} from "../../enums/priority.enum";
import {Status} from "../../enums/status.enum";
import {TaskApiService} from "../../services/api/task.api.service";
import {TaskApiModel} from "../../models/task.api.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.scss'
})
export class EditTaskFormComponent implements OnInit{

  @ViewChild(FormGroupDirective, {static: false}) formGroupDirective: FormGroupDirective;
  editTaskForm: FormGroup
  isCreateButtonLoading = false
  priorities = Object.values(Priority); // Get array of enum values
  statuses = Object.values(Status);
  constructor(private formBuilder:FormBuilder,
              private _taskService: TaskApiService,
              @Inject(MAT_DIALOG_DATA) public data: TaskApiModel,
              public dialogRef: MatDialogRef<TaskApiModel>
  ){}
  ngOnInit() {
    this.editTaskForm = this.formBuilder.group({
      title:[{ value: this.data.title, disabled: true }],
      name:[{ value: this.data.name, disabled: true }],
      priority:[{ value: this.data.priority, disabled: true }],
      status:['', [Validators.required]],
      performer:['', [Validators.required]],
      deadline:[{ value: this.data.deadline, disabled: true }],
    });
  }

  onSubmit() {
    console.log(this.editTaskForm.value)
    this.isCreateButtonLoading = true
    this._taskService.update('tasks', this.editTaskForm.value).subscribe({
      next: value => {
        this.formGroupDirective.resetForm()
        this.isCreateButtonLoading = false
        this.dialogRef.close()
      },
      error: err => {}
    })
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onUpdate() {

  }
}
