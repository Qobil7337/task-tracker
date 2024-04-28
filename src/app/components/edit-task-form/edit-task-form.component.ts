import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
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
      id:[],
      title:[],
      name:[],
      priority:[],
      status:['', [Validators.required]],
      performer:['', [Validators.required]],
      deadline:[],
    });
    this.editTaskForm.patchValue(this.data)
    this.editTaskForm.get('title')?.disable()
    this.editTaskForm.get('name')?.disable()
    this.editTaskForm.get('priority')?.disable()
    this.editTaskForm.get('deadline')?.disable()
  }

  onSubmit() {
    this.editTaskForm.get('title')?.enable();
    this.editTaskForm.get('name')?.enable();
    this.editTaskForm.get('priority')?.enable();
    this.editTaskForm.get('deadline')?.enable();
    this.isCreateButtonLoading = true
    this._taskService.update('tasks', this.editTaskForm.value).subscribe({
      next: value => {
        this.formGroupDirective.resetForm()
        this.isCreateButtonLoading = false
        this.dialogRef.close()
        this._taskService.taskUpdated.emit()
      },
      error: err => {}
    })
  }

  onCancelClick() {
    this.formGroupDirective.resetForm()
    this.dialogRef.close();
  }

  onUpdate() {

  }
}
