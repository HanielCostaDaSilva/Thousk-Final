import User from "./User";
import Task from "./Task";

class Group {
    private __id !: number;
    private __name!: string;
    private __description !: string;
    private __dateCreaton !: string;

    //============Relationship
    private __userCreator !: User;
    private __participants !: User[];
    private __tasks !: Task[];

    constructor(id: number, name: string, description: string, dateCreaton: string, userCreator: User) {
        this.__id = id
        this.__name = name
        this.__description = description
        this.__dateCreaton = dateCreaton
        this.__userCreator = userCreator;
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
    get dateCreaton() {
        return this.__dateCreaton
    }
    set dateCreaton(newdateCreaton: string) {
        this.__dateCreaton = newdateCreaton;
    }

    get userCreator() {
        return this.__userCreator;
    }
    get participants() {
        return this.__participants;
    }
    get tasks() {
        return this.__tasks;
    }

    inserirParticipant(user: User): User | null {
        if (!this.__participants.find((participant) => user.id == participant.id)) {
            this.__participants.push(user);
            return user
        }

    }

    removeParticipant(participant: User): User | null {
        const participantIndex = this.__participants.indexOf(participant);

        if (participantIndex >= 0) {
            return this.__participants.splice(participantIndex, 1)[0];
        }
        return;
    }
    inserirTask(task: Task) {
        this.__tasks.push(task);
    }


    removeTask(task: Task): Task | null {
        const taskIndex = this.__tasks.indexOf(task);

        if (taskIndex >= 0) {
            return this.__tasks.splice(taskIndex, 1)[0];
        }
        return;
    }

}

export default Group