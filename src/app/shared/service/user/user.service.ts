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
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.userApi.getAll().subscribe(users => {
  
      if (!users) {
        return;
      }
  
      this.users = users;

      this.usersUpdated.emit(this.users);
    });
  }
    
  register(nickname: string, email: string, password: string): User {
    if (this.users.filter(user => user.nickname == nickname).length > 0)
      throw new Error(`User ${nickname} already registered!`);

    const user = new User(nickname, email, password);

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
    const userIndex = this.users.indexOf(user);

    if (userIndex > -1) {
      this.userApi.delete(user.id);
      this.users.splice(userIndex, 1);
      return user;
    } else {
      throw new Error(`User ${user.nickname} not found!`);
    }
  }
}
