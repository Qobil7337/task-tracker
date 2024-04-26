import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatBadge} from "@angular/material/badge";
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { CreateTaskFormComponent } from './components/create-task-form/create-task-form.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from "@angular/material/radio";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import {MatDialogClose} from "@angular/material/dialog";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    CreateTaskFormComponent,
    CreateTaskComponent,
    CompletedTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenu,
    MatIcon,
    MatMenuTrigger,
    MatMenuContent,
    MatMenuItem,
    MatIconButton,
    MatNavList,
    MatListItem,
    MatDrawerContent,
    MatToolbar,
    MatButton,
    MatDrawerContainer,
    MatBadge,
    MatAnchor,
    MatDrawer,
    MatRadioGroup,
    MatRadioButton,
    MatCardActions,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatLabel,
    MatCardTitle,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogClose,
    MatProgressSpinner
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
