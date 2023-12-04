import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import User from '../../../model/User';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { catchError, map } from 'rxjs/operators';

import { getFirestore, arrayUnion, updateDoc } from 'firebase/firestore';  // Importe as funções necessárias do pacote firebase


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
    return this.firestore.collection(this._collectionName).doc(id).get().pipe(
      map(document => {
        const data = document.data() as User;
        const user = new User(data.nickname, data.email, data.password); // Substitua pelos campos reais do seu modelo
        user.id = document.id;
        return user;
      }),
      catchError(this.handleError)
    );
  }


  getAll(): Observable<User[]> {
    return this.colecaoUsers.valueChanges({ idField: 'id' });
  }

  getByNickname(nickname: string): Observable<any[]> {
    return this.firestore.collection(this._collectionName, ref => ref.where('nickname', '==', nickname)).valueChanges().pipe(
      catchError(this.handleError)
    );
  }

  create(user: any): Observable<any> {
    const userWithoutId = { ...user }; // Cria uma cópia do usuário sem a propriedade 'id'
    delete userWithoutId.id;
    return from(this.firestore.collection(this._collectionName).add(userWithoutId)).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<void> {
    return from(this.firestore.collection(this._collectionName).doc(id).delete()).pipe(
      catchError(this.handleError)
    );
  }

  update(user: any): Observable<void> {
    const id = user.id;
    const userWithoutId = { ...user }; // Cria uma cópia do usuário sem a propriedade 'id'
    delete userWithoutId.id;
    return from(this.firestore.collection(this._collectionName).doc(id).set(userWithoutId)).pipe(
      catchError(this.handleError)
    );
  }

  updateTasks(id: string, tasks: any[]): Observable<void> {
    const userRef = this.firestore.collection(this._collectionName).doc(id).ref;

    return from(updateDoc(userRef, {
      tasks: arrayUnion(...tasks)
    })).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Firestore Error:', error);
    return throwError('Erro ao acessar o Firestore. Verifique o console para mais detalhes.');
  }

}
