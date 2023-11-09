import { Injectable } from '@angular/core';
import User from '../../model/User'
import { UserApiService } from '../api/user-api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export default class AuthService {
  
  private _loggedIn = false;
  private _currentUserSubject: BehaviorSubject<User>;
  private _currentUser$ :Observable<User>;
  private _users: User[] =[];
  
  constructor(private userApi: UserApiService) {
    this._currentUser$ = this._currentUserSubject.asObservable();
    this.userApi.getAll().subscribe(
      (usuarios) => {
        this._users = usuarios;
      }
    )
    console.log(this._users);
  }

  login(nickname: string, password: string):Observable<User> | undefined {
    const userFinded = this._users.find(
      user => user.nickname === nickname && user.password === password);
      if (userFinded){
        this._loggedIn = true;
        this._currentUserSubject.next(userFinded);
      }
    console.log(this._currentUser$)
    return this._currentUser$;
  }

  logout() {
    const userUndefined= new User(" "," "," "); 
    this._currentUserSubject.next(userUndefined);
    this._loggedIn = false;
  }
  /**
   * Register a new user in the database.
   * @param nickname 
   * @param email 
   * @param password 
   * @returns the User generated
   */

  register(nickname: string, email: string, password: string) : User{
    if (this._users.filter(user => user.nickname == nickname).length > 0)
      throw new Error(`User ${nickname} already registered!`);

    const user = new User(nickname, email, password);

    this.userApi.create(user).subscribe(user =>{
      console.log(user);
    }
    );
    this._users.push(user);

    return user;

  }

  isLoggedIn(): boolean {
    return this._loggedIn;
  }

  get currentUser$(){
    return this._currentUser$;
  }
}
