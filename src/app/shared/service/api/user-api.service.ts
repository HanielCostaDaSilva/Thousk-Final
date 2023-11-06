import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import User from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private __url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<User> {
    return this.http.get<any>(`${this.__url}/${id}`).pipe(
      mergeMap(userData => this.turnUser(userData)),
      catchError(this.handleError)
    );
  }

  getAll(): Observable<User[]> {
    return this.http.get<any[]>(`${this.__url}`).pipe(
      mergeMap(userDataArray => this.turnsListUser(userDataArray)),
      catchError(this.handleError)
    );
  }

  getByNickname(nickname: string): Observable<User> {
    return this.http.get<any[]>(`${this.__url}?__nickname=${nickname}`).pipe(
      mergeMap(userData => this.turnUser(userData)),
      catchError(this.handleError)
    );
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.__url}`, user).pipe(
      mergeMap(userData => this.turnUser(userData)),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.__url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.__url}/${user.id}`, user).pipe(
      mergeMap(userData => this.turnUser(userData)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throw new Error('Erro do lado do cliente: ' + error.message);
    } else {
      return throwError(`Error Code: ${error.status} Message: ${error.message}`);
    }
  }

  turnUser(userData: any): Observable<User> {
    const user = new User(
      userData.__nickname,
      userData.__email,
      userData.__password
    );

    user.id = userData.__id;
    user.tasks = userData.__tasks;
    //user.groups = userData.groups;

    return new Observable((observer) => {
      observer.next(user);
      observer.complete();
    });
  }

  turnsListUser(userDataArray: any[]): Observable<User[]> {
    const users: User[] = [];

    userDataArray.forEach((userData) => {
      const user = new User(
        userData.__nickname,
        userData.__email,
        userData.__password
      );

      user.id = userData.__id;
      user.tasks = userData.__tasks;
      //user.groups = userData.groups;

      users.push(user);
    });

    return new Observable((observer) => {
      observer.next(users);
      observer.complete();
    });
  }
}
