import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Group from '../../model/group';

@Injectable({
  providedIn: 'root'
})

export class GroupApiService {
  private __url = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Group>{
    return this.http.get<Group>(`${this.__url}/${id}`).pipe(
      catchError(this.handleError));
  }

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.__url}`).pipe(
      catchError(this.handleError));
  }

  getByname(name: string): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.__url}?__name=${name}`).pipe(
      catchError(this.handleError)
    );
  }

  create(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.__url}`,group).pipe(
      catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.__url}/${id}`).pipe(
      catchError(this.handleError));
  }

  update(Group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.__url}/${Group.id}`, Group).pipe(
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
