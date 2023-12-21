import { Injectable } from '@angular/core';
import User from '../../model/User';
import { Observable } from 'rxjs';
import { UserFirestoreService } from '../firestore/user-firestore.service';
import Group from '../../model/Group';
@Injectable({
  providedIn: 'root'
})
export default class UserService {


  constructor(private userApi: UserFirestoreService) {
  }

  getUserById(userId: string): Observable<User> {

    return this.userApi.getById(userId);
  }


  register(user: User): Observable<User> {
    return this.userApi.create(user);
  }

  getAll(): Observable<User[]> {
    return this.userApi.getAll();

  }

  remove(user: User): Observable<void> {
    console.log(user)
    if (user.id)
      return this.userApi.delete(user.id);
    else{
      throw new Error("User not found")
    }
  }

  getUserByNickName(nickname: string): Observable<User[]> {
    return this.userApi.getUserByNickname(nickname);
  }

  addGroup(user: User, group: Group): Observable<void>{
    if (user.groups && group.id ) {
      const indexGroup = user.groups.indexOf(group.id);
      if(indexGroup > 0){
        throw new Error( `Usuário ${user.nickname} já no grupo ${group.name}`)
      }
      user.groups.push(group.id);
      return this.userApi.updateGroups(user);
    }else{
      throw new Error(`Alguma coisa não deu certo no lado do usuário`);
    }
  }

  
  removeGroup(user: User, group: Group) {
    if (user.groups && group.id ) {
      const indexGroup = user.groups.indexOf(group.id);
      if(indexGroup < 0){
        throw new Error( `User ${user.nickname} not in group ${group.name}`)
      }
      user.groups.splice(indexGroup, 1);
      this.userApi.updateGroups(user);
    }
  }

}
