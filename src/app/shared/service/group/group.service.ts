import { Injectable } from '@angular/core';
import User from '../../model/User';
import Group from '../../model/Group';
import { GroupApiService } from '../api/group-api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[] = [];
  
  constructor(private groupApi:GroupApiService) { 
    this.groupApi.getAll().subscribe(
      usuarios => {
        console.log(usuarios)
        this.groups = usuarios
        console.log(this.groups)
      }
    );
  }

  createGroup(name: string, description: string, dateCreated: string, author: User): Group {
    const newGroup = new Group(name, description, dateCreated, author);

    return newGroup;
  }

  removeGroup(group: Group): Group | undefined {
    const groupIndex = this.groups.indexOf(group);

    if (groupIndex < 0) {
      this.groups.splice(groupIndex, 1);
      return group;
    }
    return undefined;
  }

  removeParticipant(group: Group, participant: User): User | undefined {
    const groupIndex = this.groups.indexOf(group);

    if (groupIndex < 0) {
      throw new Error("Group not Found!");
    }

    const participantIndex = group.getIndexParticiapnt(participant);

    if (participantIndex < 0) {
      throw new Error(`Participant: ${participant.nickname} not Found!`);
    }

    group.participants.splice(participantIndex, 1);

    participant.removeGroup(group); // O participante remove o grupo de sua lista.

    return participant;
  }

  editGroup(group:Group,name:string,description:string):Group{
    
    const groupIndex = this.groups.indexOf(group);
    if (groupIndex < 0) {
      throw new Error("Group not Found!");
    }

    group.name = name;
    group.description = description;
    return group
  }

  addParticipant(group: Group, participant: User) {
    const participantIndex = group.getIndexParticiapnt(participant);
    
    if (participantIndex < 0) {
      group.addParticipant(participant);
    }
    else
      throw new Error(`Participarnt ${participant.nickname} already added`);
  }

}
