import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {CreateTaskComponent} from "./pages/create-task/create-task.component";
import {CompletedTasksComponent} from "./pages/completed-tasks/completed-tasks.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'completed', component: CompletedTasksComponent },
  // { path: 'task/:id', component: TaskDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
