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
          this.groups = usuarios
      }
    );
  }

  createGroup(group:Group): Group {
    this.groupApi.create(group);
    return group;
  }

  removeGroup(group: Group): Group | undefined {

    const groupIndex = this.groups.indexOf(group);
    if (groupIndex < 0) {
      throw new Error("Group: "+ group.name+ " not found!");
    }

    this.groups.splice(groupIndex, 1);
    this.groupApi.delete(group.id);
    return group;
  }

  addParticipant(group: Group, participant: User) {
    const participantIndex = group.getIndexParticiapnt(participant);
    
    if (participantIndex < 0) {
      group.addParticipant(participant);
    }
    else
      throw new Error(`Participarnt ${participant.nickname} already added! `);
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
    this.groupApi.update(group);
    participant.removeGroup(group); // O participante remove o grupo de sua lista.

    return participant;
  }

  addModerator(group: Group, moderator: User){
    
    if (group.getIndexParticiapnt(moderator) < 0) {
      throw new Error("Participant "+ moderator.nickname + "not found!");
    }
    if(group.getIndexModerator(moderator)>0 )
      throw new Error("Participant "+ moderator.nickname + "already a moderator!");

    this.groupApi.update(group);
    
    return group;

  }

  removeModerator(group: Group, moderator: User) : User{
    const groupIndex = this.groups.indexOf(group);

    if (groupIndex < 0) {
      throw new Error("Group not Found!");
    }

    const moderatorIndex = group.getIndexModerator(moderator);

    if (moderatorIndex < 0) {
      throw new Error(`Moderator: ${moderator.nickname} not Found!`);
    }

    group.moderators.splice(moderatorIndex, 1);
    this.groupApi.update(group);
    
    return moderator;
  }

}
