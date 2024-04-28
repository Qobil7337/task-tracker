import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {CreateTaskComponent} from "./pages/create-task/create-task.component";
import {TaskDetailComponent} from "./components/task-detail/task-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailComponent},
  { path: 'create', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
