import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import User from '../../../model/User';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { catchError, map } from 'rxjs/operators';

//import Task from 'src/app/shared/model/Task';
import Task from '../../../model/Task';

@Injectable({
  providedIn: 'root'
})

export class UserFirestoreService {

  colecaoUsers: AngularFirestoreCollection<User>;
  private _collectionName = 'users';


  constructor(private firestore: AngularFirestore) {
    this.colecaoUsers = firestore.collection(this._collectionName);
  }

  getById(id: string): Observable<User> {
    return this.colecaoUsers.doc(id).get().pipe(
      
      map(document => {
      const user= new User(id, document.data());
      user.tasks = document.data()?.tasks || [];
      return user;
    })
    );
  }

  getAll(): Observable<User[]> {
    return this.colecaoUsers.valueChanges({ idField: 'id' });
  }

  getUserByNickname(nickname: string): Observable<any[]> {
    return this.firestore.collection(this._collectionName, ref => ref.where('nickname', '==', nickname)).valueChanges().pipe(
      catchError(this.handleError)
    );
  }

  create(user: any): Observable<User> {
    const userWithoutId = { ...user }; 
    delete userWithoutId.id; //remove o id do objeto
    return from(this.firestore.collection(this._collectionName).add(userWithoutId)).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<void> {
    return from(this.firestore.collection(this._collectionName).doc(id).delete()).pipe(
      catchError(this.handleError)
    );
  }

  update(user: User): Observable<void> {
    return from(this.colecaoUsers.doc(user.id).update({ ...user }));
  }

  updateTasks(user: User): Observable<void> {
    if (user.tasks) {
      const tasksMap = user.tasks.map(obj => ({ ...obj }));
      return from(this.colecaoUsers.doc(user.id).update({ tasks: tasksMap }));
    }
    return new Observable<void>;

  }

  private handleError(error: any) {
    console.error('Firestore Error:', error);
    return throwError('Erro ao acessar o Firestore. Verifique o console para mais detalhes.');
  }

}
