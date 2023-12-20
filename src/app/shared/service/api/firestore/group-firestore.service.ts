import { Injectable } from '@angular/core';
import {from, Observable, throwError } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { catchError, map } from 'rxjs/operators';
import Group from '../../../model/Group';
import UserService from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupFirestoreService {

  colecaoGroups: AngularFirestoreCollection<Group>;
  private _collectionName = 'groups';

  constructor(private firestore: AngularFirestore, private userService: UserService) {
    this.colecaoGroups = firestore.collection(this._collectionName);
  }

  getById(id: string): Observable<Group> {
    return this.colecaoGroups.doc(id).get().pipe(
      map(document => {
        const group = new Group(id, document.data());
        return group;
      })
    );
  }

  getAll(): Observable<Group[]> {
    return this.colecaoGroups.valueChanges({ idField: 'id' });
  }

  create(group: any): Observable<Group> {
    const groupWithoutId = { ...group };
    console.log(group);
    delete groupWithoutId.id; 
    return from(this.firestore.collection(this._collectionName).add(groupWithoutId)).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<void> {
    return from(this.firestore.collection(this._collectionName).doc(id).delete()).pipe(
      catchError(this.handleError)
    );
  }

  update(group: Group): Observable<void> {
    if (group.id)
      return from(this.colecaoGroups.doc(group.id).update({ ...group }));
    else
      return new Observable<void>;
  }

  updateTasks(group: Group): Observable<void> {
    if (group.tasks) {
      const tasksMap = group.tasks.map(obj => ({ ...obj }));
      return from(this.colecaoGroups.doc(group.id).update({ tasks: tasksMap }));
    }
    return new Observable<void>;

  }

  updateParticipants(group: Group): Observable<void> {
    if (group.participants) {
      /* const participantsMap = group.participants.map(obj => ({ )) */;
      return from(this.colecaoGroups.doc(group.id).update({ participants: group.participants }));
    }
    return new Observable<void>;

  }

  private handleError(error: any) {
    console.error('Firestore Error:', error);
    return throwError('Erro ao acessar o Firestore. Verifique o console para mais detalhes.');
  }
}
