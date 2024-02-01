import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchtaskService {

  private apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  listAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/search').pipe(
      map(tasks => {
        console.log("Success msg from SearchTaskService for ListAllTask");
        return tasks;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  searchTaskById(taskID: string): Observable<Task> {
    const headers = new HttpHeaders({
      'id': taskID,
    });
    return this.http.get<Task>(this.apiUrl + '/search', { headers }).pipe(
      map(task => {
        console.log("Success msg from SearchTaskService for searchTaskById");
        return task;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  searchTaskByName(taskName: string): Observable<Task[]> {
    const headers = new HttpHeaders({
      'name': taskName,
    });
    return this.http.get<Task[]>(this.apiUrl + '/searchbyname', { headers }).pipe(
      map(tasks => {
        console.log("Success msg from SearchTaskService for searchTaskByName");
        return tasks;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  searchTaskByAssignee(taskAssignee: string, numList: number): Observable<Task[]> {
    const headers = new HttpHeaders({
      'assignee': taskAssignee,
      'num': numList
    });
    return this.http.get<Task[]>(this.apiUrl + '/searchbyassignee', { headers }).pipe(
      map(tasks => {
        console.log("Success msg from SearchTaskService for searchTaskByAssignee");
        return tasks;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}
