import { Injectable } from '@angular/core';
import User from '../../model/User';
import { UserApiService } from '../api/user-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  users: User[] = [];
  
  constructor(private userApi:UserApiService) {
    userApi.getAll().subscribe(users => {this.users = users})
   }
  
  register(nickname: string, email: string, password: string) : User{
    
    if (this.users.filter(user => user.nickname == nickname).length > 0)
      throw new Error(`User ${nickname} already registered!`);

    const user = new User(nickname, email, password);

    this.userApi.create(user).subscribe(user =>{
      console.log(user);
    }
    );
    this.users.push(user);

    return user;

  }

  login(nickname: string, password: string):User | undefined {
    const userFinded = this.users.find(
      user => user.nickname === nickname && user.password === password);
      if (userFinded){
        return userFinded;
      }
    return;
  }
  
  getAll():Observable<User[]>{
    return this.userApi.getAll();
  }

  remove(user: User): User{
    const userIndex= this.users.indexOf(user);
    if (userIndex > -1){
      this.userApi.delete(user);
      this.users.splice(userIndex,1);
      return user;
    }
    else{
      throw new Error(`User ${user.nickname} not found!`)
    }

  }

  

}
