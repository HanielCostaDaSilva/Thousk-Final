import User from "./User";
import Task from "./Task";

class Group {
    private _id !: number;
    private _name!: string;
    private _description !: string;
    private _dateCreated !: string;

    //============Relationship
    private _author !: User;
    private _participants !: User[];
    private _moderators !: User[];
    private _tasks !: Task[];

    constructor(name: string, description: string, dateCreated: string, author: User) {
        this._name = name
        this._description = description
        this._dateCreated = dateCreated
        this._author = author;
    }

    get id() {
        return this._id
    }
    set id(newId: number) {
        this._id = newId;
    }
    get name() {
        return this._name
    }

    set name(newname: string) {
        this._name = newname;
    }
    get description() {
        return this._description
    }
    set description(newdescription: string) {
        this._description = newdescription;
    }
    get dateCreated() {
        return this._dateCreated
    }
    set dateCreated(newdateCreated: string) {
        this._dateCreated = newdateCreated;
    }

    get author() {
        return this._author;
    }
    get participants() {
        return this._participants;
    }
    get tasks() {
        return this._tasks;
    }

    addParticipant(user: User): User | undefined {
        if (!this._participants.find((participant) => user.id == participant.id)) {
            this._participants.push(user);
            return user
        }
        return;
    }

    removeParticipant(participant: User): User | undefined {
        const participantIndex = this._participants.indexOf(participant);

        if (participantIndex >= 0) {
            return this._participants.splice(participantIndex, 1)[0];
        }

        throw new Error(`participant ${participant.nickname}} not found!` )
    }
    
    addTask(task: Task) {
        this._tasks.push(task);
    }


    removeTask(task: Task): Task | undefined {
        const taskIndex = this._tasks.indexOf(task);

        if (taskIndex >= 0) {
            return this._tasks.splice(taskIndex, 1)[0];
        }
        throw new Error(`task ${task.title} not found!`)
    }

    getIndexParticiapnt(user:User) :number{
        return this._participants.indexOf(user);
    }
    
    getIndexTask(task:Task) :number{
        return this._tasks.indexOf(task);
    }

    addmoderator(moderator: User) {
        this._moderators.push(moderator);
    }


    removemoderator(moderator: User): User | undefined {
        const moderatorIndex = this._moderators.indexOf(moderator);

        if (moderatorIndex >= 0) {
            return this._moderators.splice(moderatorIndex, 1)[0];
        }
        throw new Error(`moderator ${moderator.nickname} not found!`)
    }

}

export default Group