import {delay, Observable, of, throwError} from "rxjs";
import {TaskApiModel} from "../models/task.api.model";

export class BaseCrud<T> {
  create(key: string, data: T): Observable<T> {
    try {
      let storedData: T[] = [];
      const storedItem = localStorage.getItem(key);

      if (storedItem) {
        storedData = JSON.parse(storedItem) as T[];
      }

      storedData.push(data);
      localStorage.setItem(key, JSON.stringify(storedData));

      return of(data).pipe(delay(1000)); // Mock server delay
    } catch (error) {
      return throwError(() => error);
    }
  }

  read(key: string): Observable<T[]> {
    try {
      const item = localStorage.getItem(key);
      const parsedData = item ? JSON.parse(item) as T[] : [];
      return of(parsedData).pipe(delay(1000));
    } catch (error) {
      return throwError(() => error);
    }
  }


  update(key: string, data: T): Observable<T> {
    try {
      const storedDataString = localStorage.getItem(key);
      if (!storedDataString) {
        return throwError(() => new Error(`Item with key '${key}' not found in local storage`));
      }
      const storedData: T[] = JSON.parse(storedDataString);
      // @ts-ignore
      const indexToUpdate = storedData.findIndex(item => item.id === data.id);
      if (indexToUpdate === -1) {
        // @ts-ignore
        return throwError(() => new Error(`Item with ID '${data.id}' not found in local storage`));
      }
      storedData[indexToUpdate] = { ...storedData[indexToUpdate], ...data };
      localStorage.setItem(key, JSON.stringify(storedData));
      return of(storedData[indexToUpdate]).pipe(delay(1000));
    } catch (error) {
      return throwError(() => error);
    }
  }


  delete(key: string, id: number): Observable<void> {
    try {
      const storedDataString = localStorage.getItem(key);
      if (!storedDataString) {
        throw new Error(`No data found for key '${key}' in local storage`);
      }
      const storedData: T[] = JSON.parse(storedDataString);
      // @ts-ignore
      const taskIndex = storedData.findIndex((task) => task.id === id);
      if (taskIndex === -1) {
        throw new Error(`Task with ID '${id}' not found in local storage`);
      }
      storedData.splice(taskIndex, 1);
      localStorage.setItem(key, JSON.stringify(storedData));
      return of(undefined);
    } catch (error) {
      return throwError(() => error);
    }
  }
}
