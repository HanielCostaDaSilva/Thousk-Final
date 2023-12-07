import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import User from '../../model/User';
import Task from '../../model/Task';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  private _url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this._url}/${id}`).pipe(
      catchError(this.handleError));
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this._url}`).pipe(
      catchError(this.handleError));
  }

  getByNickname(nickname: string): Observable<User[]> {
    return this.http.get<User[]>(`${this._url}?nickname=${nickname}`).pipe(
      catchError(this.handleError)
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this._url}`, user).pipe(
      catchError(this.handleError));
  }

  delete(user: User): Observable<void> {
    return this.http.delete<void>(`${this._url}/${user.id}`).pipe(
      catchError(this.handleError));
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this._url}/${user.id}`, user)
  }

  updateTasks(user:User): Observable<User> {
    const updateObject = {
      tasks: user.tasks
    };    
    return this.http.patch<User>(`${this._url}/${user.id}`, updateObject);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throw new Error('Erro do lado do cliente: ' + error.message);
    } else {

      return throwError(`Error Code: ${error.status} Message: ${error.message}`);
    }
  }
}
