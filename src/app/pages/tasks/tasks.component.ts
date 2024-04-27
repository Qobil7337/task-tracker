import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {TaskApiService} from "../../services/api/task.api.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit{
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
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks() {
    this._taskService.read('tasks').subscribe({
      next: (res) => {
        console.log(res)
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

  deleteTask(id: number) {
    this._taskService.delete('tasks', id).subscribe({
      next: (res) => {
        this.getTasks();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    // const dialogRef = this._dialog.open(EmpAddEditComponent, {
    //   data,
    // });
    //
    // dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getTasks();
    //     }
    //   },
    // });
  }
}
