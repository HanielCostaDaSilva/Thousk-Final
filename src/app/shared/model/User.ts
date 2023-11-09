import Group from "./Group";
import Task from "./Task";

class User {

    private _id !: number;
    private _nickname: string = '';
    private _email: string = '';
    private _password: string = '';

    private _tasks: Task[] = []
    private _groups: Group[] = []


    constructor(nickname: string, email: string, password: string) {
        this._nickname = nickname;
        this._email = email;
        this._password = password;
    }

    get id() {
        return this._id;
    }

    get nickname() {
        return this._nickname;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    set id(newId) {
        this._id = newId;
    }

    set nickname(newNickname) {
        this._nickname = newNickname;
    }

    set email(newEmail) {
        this._email = newEmail;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

    get tasks() {
        return this._tasks;
    }
    
    set tasks(tasks: Task[]){
        this._tasks=tasks;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    addGroup(group: Group) :Group {
        if (this._groups.indexOf(group) >= 0)
            throw new Error("Group already exists")

        this._groups.push(group);
        return group

    }
    
    removeGroup(group: Group) {
        const groupIndex = this._groups.indexOf(group);

        if (groupIndex < 0)
            throw new Error(`Group ${group.name} not found!`);

        this._groups.splice(groupIndex, 1);
    }

    getIndexGroup(group:Group) :number{
        return this._groups.indexOf(group);
    }
    
    getIndexTask(task:Task) :number{
        return this._tasks.indexOf(task);
    }

    get groups(){
        return this._groups;
    }
    set groups(groups:Group[]){
        this._groups = groups;
    }
}

export default User;