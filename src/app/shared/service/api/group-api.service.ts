import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Group from '../../model/Group';

@Injectable({
  providedIn: 'root'
})

export class GroupApiService {
  private _url = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Group>{
    return this.http.get<Group>(`${this._url}/${id}`).pipe(
      catchError(this.handleError));
  }

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this._url}`).pipe(
      catchError(this.handleError));
  }

  getByname(name: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${this._url}?name=${name}`).pipe(
      catchError(this.handleError)
    );
  }

  create(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this._url}`,group).pipe(
      catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this._url}/${id}`).pipe(
      catchError(this.handleError));
  }

  update(Group: Group): Observable<Group> {
    return this.http.put<Group>(`${this._url}/${Group.id}`, Group).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throw new Error('Erro do lado do cliente: '+ error.message);
    } else {
    
      return throwError(`Error Code: ${error.status} Message: ${error.message}`);
    }
  }
}
