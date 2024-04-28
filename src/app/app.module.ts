import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditTaskFormComponent } from './components/edit-task-form/edit-task-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import {AngularMaterialModule} from "./angular-material-module/angular-material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    CreateTaskFormComponent,
    CreateTaskComponent,
    EditTaskFormComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
