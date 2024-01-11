import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../models/task.model';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  constructor(private http: HttpClient) { }

  createTaskObservable(task: Task): Observable<string> {
    return this.http.put('http://localhost:8080/api/create', task, { responseType: 'text' }).pipe(
      map(result => {
        console.log("Success msg from CreatetaskService");
        return result;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}
