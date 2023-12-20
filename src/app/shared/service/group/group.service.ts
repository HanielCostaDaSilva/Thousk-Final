import { Injectable } from '@angular/core';
import User from '../../model/User';
import Group from '../../model/Group';
import { GroupFirestoreService } from '../api/firestore/group-firestore.service';
import { Observable } from 'rxjs';
import UserService from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private userService: UserService, private groupApi: GroupFirestoreService) {
  }

  getAll(): Observable<Group[]> {
    return this.groupApi.getAll();
  }
  create(group: Group): Group {
    this.groupApi.create(group);
    return group;
  }

  remove(group: Group): Group {
    if (group.id)
      this.groupApi.delete(group.id);
    return group;

  }

/*   getParticipants(group: Group): Observable<User[]> {

    if (group.participants) {
  
      return group.participants.map(participantId => {
        return this.userService.getUserById(participantId);
      });
    } else {
      throw new Error(`Grupo ${group.name} não possui participantes`);
    }
  } */


  addParticipant(group: Group, participant: User): Group {
    if (group.participants && participant.id) {
      const participantId = group.participants.filter(participantId => participantId === participant.id);
      if (participantId.length == 0) {
        group.participants.push(participant.id);
        return group;
      }
      else
        throw new Error(`Participarnte ${participant.nickname} já adicionado! `);

    } else {
      throw new Error(`Alguma coisa não está certa`)
    }

  }

  editGroup(group: Group, name: string, description: string): Group {

    group.name = name;
    group.description = description;
    this.groupApi.update(group);
    return group
  }


  removeParticipant(group: Group, participant: User): Group {
    if (group.participants && participant.id) {

      const participantIndex = group.participants.indexOf(participant.id);

      if (participantIndex > 0) {
        group.participants.splice(participantIndex, 1);
        this.groupApi.updateParticipants(group);
        return group;
      }
      else
        throw new Error(`Participarnte ${participant.nickname} não Encontrado! `);

    } else {
      throw new Error(`Alguma coisa não está certa`)
    }

  }
}
