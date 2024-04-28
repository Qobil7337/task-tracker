import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskApiService} from "../../services/api/task.api.service";
import {TaskApiModel} from "../../models/task.api.model";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'name', 'priority', 'status', 'performer', 'deadline']
  dataSource: TaskApiModel[] = []
  constructor(private route: ActivatedRoute,
              private taskService: TaskApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']
      if (id) {
        this.taskService.getById('tasks', +id).subscribe({
          next: value => {
            this.dataSource = [value]
          },
          error: err => {
            console.error('Error fetching task:', err);
          }
        })
      }
    })
  }
}
