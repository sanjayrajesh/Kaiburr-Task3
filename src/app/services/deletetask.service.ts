import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeletetaskService {

  constructor(private http: HttpClient) { }

  deleteTaskObservable(taskID: string): Observable<string> {
    const headers = new HttpHeaders({
      'id': taskID,
    });
    return this.http.delete('http://localhost:8080/api/delete', { headers, responseType: 'text' }).pipe(
      map(result => {
        console.log("Success msg from DeletetaskService");
        return result;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}
