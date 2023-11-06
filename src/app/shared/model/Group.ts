import User from "./User";
import Task from "./Task";

class Group {
    private __id !: number;
    private __name!: string;
    private __description !: string;
    private __dateCreated !: string;

    //============Relationship
    private __author !: User;
    private __participants !: User[];
    private __moderators !: User[];
    private __tasks !: Task[];

    constructor(name: string, description: string, dateCreated: string, author: User) {
        this.__name = name
        this.__description = description
        this.__dateCreated = dateCreated
        this.__author = author;
    }

    get id() {
        return this.__id
    }
    set id(newId: number) {
        this.__id = newId;
    }
    get name() {
        return this.__name
    }

    set name(newname: string) {
        this.__name = newname;
    }
    get description() {
        return this.__description
    }
    set description(newdescription: string) {
        this.__description = newdescription;
    }
    get dateCreated() {
        return this.__dateCreated
    }
    set dateCreated(newdateCreated: string) {
        this.__dateCreated = newdateCreated;
    }

    get author() {
        return this.__author;
    }
    get participants() {
        return this.__participants;
    }
    get tasks() {
        return this.__tasks;
    }

    addParticipant(user: User): User | undefined {
        if (!this.__participants.find((participant) => user.id == participant.id)) {
            this.__participants.push(user);
            return user
        }
        return;
    }

    removeParticipant(participant: User): User | undefined {
        const participantIndex = this.__participants.indexOf(participant);

        if (participantIndex >= 0) {
            return this.__participants.splice(participantIndex, 1)[0];
        }

        throw new Error(`participant ${participant.nickname}} not found!` )
    }
    
    addTask(task: Task) {
        this.__tasks.push(task);
    }


    removeTask(task: Task): Task | undefined {
        const taskIndex = this.__tasks.indexOf(task);

        if (taskIndex >= 0) {
            return this.__tasks.splice(taskIndex, 1)[0];
        }
        throw new Error(`task ${task.title} not found!`)
    }

    getIndexParticiapnt(user:User) :number{
        return this.__participants.indexOf(user);
    }
    
    getIndexTask(task:Task) :number{
        return this.__tasks.indexOf(task);
    }

    addmoderator(moderator: User) {
        this.__moderators.push(moderator);
    }


    removemoderator(moderator: User): User | undefined {
        const moderatorIndex = this.__moderators.indexOf(moderator);

        if (moderatorIndex >= 0) {
            return this.__moderators.splice(moderatorIndex, 1)[0];
        }
        throw new Error(`moderator ${moderator.nickname} not found!`)
    }

}

export default Group