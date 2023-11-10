import User from "./User";
import Task from "./Task";

class Group {
    id !: string;

    //============Relationship
    participants !: User[];
    moderators !: User[];
    tasks !: Task[];

    constructor(
        public name: string,
        public description: string,
        public dateCreated: string,
        public author: User) { }


    addParticipant(user: User): User | undefined {
        if (!this.participants.find((participant) => user.id == participant.id)) {
            this.participants.push(user);
            return user
        }
        return;
    }

    removeParticipant(participant: User): User | undefined {
        const participantIndex = this.participants.indexOf(participant);

        if (participantIndex >= 0) {
            return this.participants.splice(participantIndex, 1)[0];
        }

        throw new Error(`participant ${participant.nickname}} not found!`)
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }


    removeTask(task: Task): Task | undefined {
        const taskIndex = this.tasks.indexOf(task);

        if (taskIndex >= 0) {
            return this.tasks.splice(taskIndex, 1)[0];
        }
        throw new Error(`task ${task.title} not found!`)
    }

    getIndexParticiapnt(user: User): number {
        return this.participants.indexOf(user);
    }

    getIndexTask(task: Task): number {
        return this.tasks.indexOf(task);
    }

    addmoderator(moderator: User) {
        this.moderators.push(moderator);
    }


    removemoderator(moderator: User): User | undefined {
        const moderatorIndex = this.moderators.indexOf(moderator);

        if (moderatorIndex >= 0) {
            return this.moderators.splice(moderatorIndex, 1)[0];
        }
        throw new Error(`moderator ${moderator.nickname} not found!`)
    }

}

export default Group