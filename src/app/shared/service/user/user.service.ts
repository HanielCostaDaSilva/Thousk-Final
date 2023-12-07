import { EventEmitter, Injectable } from '@angular/core';
import User from '../../model/User';
import { Observable } from 'rxjs';
import { UserFirestoreService } from '../api/firestore/user-firestore.service';

@Injectable({
  providedIn: 'root'
})
export default class UserService {

  getUserById(userId: string): Observable<User> {

    return this.userApi.getById(userId);
  }

  users: User[] = [];
  usersUpdated = new EventEmitter<User[]>(); // Evento para notificar sobre a atualização de usuários

  constructor(private userApi: UserFirestoreService) {
  }


  register(nickname: string, email: string, password: string): User {
    if (this.users.filter(user => user.nickname == nickname).length > 0)
      throw new Error(`User ${nickname} already registered!`);

    const user = new User();
    user.nickname = nickname;
    user.email = email;
    user.password = password;

    this.userApi.create(user).subscribe(createdUser => {
    });

    this.users.push(user);

    return user;
  }

  login(nickname: string, password: string): User | undefined {
    const userFound = this.users.find(user => user.nickname === nickname && user.password === password);

    if (userFound) {
      return userFound;
    }

    return undefined;
  }

  getAll(): Observable<User[]> {
    return this.userApi.getAll();

  }

  remove(user: User): User {
    if (user.id)
      this.userApi.delete(user.id);
    return user;
  }
}
