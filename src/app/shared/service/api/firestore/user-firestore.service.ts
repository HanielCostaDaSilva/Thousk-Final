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

  getById(id: string): Observable<User> 
    {
      return this.colecaoUsers.doc(id).get().pipe(
        map(document =>
        new User(id, document.data())));
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

  update(user: User): Observable<void> {
    console.log(user+" updated")
    return from(this.colecaoUsers.doc(user.id).update({...user}));
  }

  updateTasks(id: string, tasks: Task[]): Observable<void> {
    console.log();

    // Mapeie os objetos tasks para um formato suportado pelo Firestore
    const formattedTasks = tasks.map(task => {
      return {
        author: task.author?.id || null, // Adicione uma verificação para o autor
        category: task.category || null,
        dateFinal: task.dateFinal,
        dateStart: task.dateStart,
        description: task.description || null,
        id: task.id || tasks.length + 1,
        imageLink: task.imageLink || null,
        state: task.state || "waiting",
        title: task.title || null,
      };
    });

    const userRef = this.firestore.collection(this._collectionName).doc(id).ref;

    return from(this.firestore.firestore.runTransaction(async (transaction) => {
      const userDoc = await transaction.get(userRef);
      const userTasks = userDoc.get('tasks') || [];

      // Verifique se os itens já existem para evitar duplicatas
      const updatedTasks = [...userTasks, ...formattedTasks].filter((task, index, self) =>
        index === self.findIndex((t) => t.id === task.id)
      );

      // Certifique-se de que todos os valores não são nulos antes de tentar realizar a atualização

      transaction.update(userRef, { tasks: updatedTasks });

    })).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Firestore Error:', error);
    return throwError('Erro ao acessar o Firestore. Verifique o console para mais detalhes.');
  }

}
