import {Observable, of, throwError} from "rxjs";

export class BaseCrud<T> {
  create(key: string, data: T): Observable<T> {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return of(data);
    } catch (error) {
      return throwError(() => error);
    }
  }

  read(key: string): Observable<T[]> {
    try {
      const item = localStorage.getItem(key);
      const parsedData = item ? JSON.parse(item) as T[] : [];
      return of(parsedData);
    } catch (error) {
      return throwError(() => error);
    }
  }


  update(key: string, data: T): Observable<T> {
    try {
      if (localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
        return of(data);
      } else {
        return throwError(() => new Error(`Item with key '${key}' not found in local storage`));
      }
    } catch (error) {
      return throwError(() => error);
    }
  }


  delete(key: string): Observable<void> {
    try {
      localStorage.removeItem(key);
      return of(undefined);
    } catch (error) {
      return throwError(() => error);
    }
  }
}
