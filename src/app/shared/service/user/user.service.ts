import { EventEmitter, Injectable } from '@angular/core';
import User from '../../model/User';
import { Observable } from 'rxjs';
import { UserFirestoreService } from '../api/firestore/user-firestore.service';
import { MessageSnackService } from '../message/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  getUserById(userId: string): Observable<User> {

    return this.userApi.getById(userId);
  }

  //users: User[] = [];
  usersUpdated = new EventEmitter<User[]>(); // Evento para notificar sobre a atualização de usuários

  constructor(private userApi: UserFirestoreService) {
  }


  register(user:User): Observable<User> {
    return this.userApi.create(user);
  }
/* 
  login(nickname: string, password: string):User |void{
    //const userFound = this.users.find(user => user.nickname === nickname && user.password === password);
    // Procura no banco de dados, um usuário com o nome informado 
    this.userApi.getUserByNickname(nickname).subscribe(userFound => {

      if (userFound.length == 0) { //caso não encontre
        throw new Error(`Usuário ${nickname} Não encontrado!`);
      } else {
        //caso encontre
        if (userFound[0].password === password) { //sempre haverá apenas um usuário com aquele nickname
          user= userFound[0];
        }
        else {
          throw new Error("Senha Incorreta.");
        }
      }
    });
  } */

  getAll(): Observable<User[]> {
    return this.userApi.getAll();

  }

  remove(user: User): User {
    if (user.id)
      this.userApi.delete(user.id);
    return user;
  }

  getUserByNickName(nickname: string): Observable<User[]>{
    return this.userApi.getUserByNickname(nickname);

  }
}
