import {EventEmitter, Injectable, Output} from '@angular/core';
import {BaseCrud} from "../../helpers/base-crud";
import {TaskApiModel} from "../../models/task.api.model";


@Injectable({
  providedIn: 'root'
})
export class TaskApiService extends BaseCrud<TaskApiModel>{
  @Output() taskUpdated: EventEmitter<void> = new EventEmitter<void>()

}
