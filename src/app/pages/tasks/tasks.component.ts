import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {TaskApiService} from "../../services/api/task.api.service";
import {CreateTaskFormComponent} from "../../components/create-task-form/create-task-form.component";
import {EditTaskFormComponent} from "../../components/edit-task-form/edit-task-form.component";
import {Subscription} from "rxjs";
import {TaskApiModel} from "../../models/task.api.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit, OnDestroy{
  private taskUpdatedSubscription: Subscription;
  displayedColumns: string[] = [
    'id',
    'title',
    'name',
    'priority',
    'status',
    'performer',
    'deadline',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _taskService: TaskApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskUpdatedSubscription = this._taskService.taskUpdated.subscribe(() => {
      this.getTasks()
    })
    this.getTasks();
  }

  ngOnDestroy() {
    if (this.taskUpdatedSubscription) {
      this.taskUpdatedSubscription.unsubscribe();
    }
  }


  getTasks() {
    this._taskService.read('tasks').subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTask(event: MouseEvent, id: number) {
    event.stopPropagation();
    this._taskService.delete('tasks', id).subscribe({
      next: (res) => {
        this.getTasks();
      },
      error: console.log,
    });
  }

  openEditForm(event: MouseEvent, data: any) {
    event.stopPropagation();
    const dialogRef = this._dialog.open(EditTaskFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTasks();
        }
      },
    });
  }

  onSingleTaskClick(task: TaskApiModel) {
    const {id} = task
    this.router.navigate(['/tasks', id], )
  }
}
