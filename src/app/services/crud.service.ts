import { Injectable } from '@angular/core';
import {TaskApiModel} from "../models/task.api.model";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  create(key: string, data: TaskApiModel): Promise<TaskApiModel> {
    return new Promise<TaskApiModel>((resolve, reject) => {
      try {
        localStorage.setItem(key, JSON.stringify(data));
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  read(key: string): Promise<TaskApiModel[] | null> {
    return new Promise<TaskApiModel[] | null>((resolve, reject) => {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          const parsedData = JSON.parse(item) as TaskApiModel[];
          resolve(parsedData);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  update(key: string, data: TaskApiModel): Promise<TaskApiModel> {
    return new Promise<TaskApiModel>((resolve, reject) => {
      try {
        if (localStorage.getItem(key)) {
          localStorage.setItem(key, JSON.stringify(data));
          resolve(data);
        } else {
          reject(new Error(`Item with key '${key}' not found in local storage`));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  // Delete operation (async)
  delete(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

}
