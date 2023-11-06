import { Injectable } from '@angular/core';
import User from '../../model/User'
import { UserApiService } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})

export default class AuthService {
  
  private __loggedIn = false;
  private __currentUser : User | undefined;
  private __users: User[] =[];
  
  constructor(private userApi: UserApiService){
    
    this.userApi.getAll().subscribe({
      next(usuario){
        console.log(`got user : ${usuario}`);
      },
/*       usuarios => {
        console.log(usuarios)
        this.__users = usuarios
        console.log(this.__users)
      } */

  });
  }

  login(nickname: string, password: string):User | undefined {
    const userFinded = this.__users.find(
      user => user.nickname === nickname && user.password === password);
      if (userFinded){
        this.__loggedIn = true;
        this.__currentUser=userFinded;
      }
    console.log(this.currentUser)
    return this.__currentUser;
  }

  logout() {
    this.__currentUser=undefined;
    this.__loggedIn = false;
  }
  /**
   * Register a new user in the database.
   * @param nickname 
   * @param email 
   * @param password 
   * @returns the User generated
   */
  register(nickname: string, email: string, password: string) : User{
    if (this.__users.filter(user => user.nickname == nickname).length > 0)
      throw new Error(`User ${nickname} already registered!`);

    const user = new User(nickname, email, password);

    this.userApi.create(user).subscribe(user =>{
      console.log(user);
      this.__users.push(user) 

    }
      );

    return user;

  }

  isLoggedIn(): boolean {
    return this.__loggedIn;
  }

  get currentUser(){
    return this.__currentUser;
  }
}
