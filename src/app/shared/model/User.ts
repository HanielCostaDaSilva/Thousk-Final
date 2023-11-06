import Group from "./Group";
import Task from "./Task";

class User {

    private __id !: number;
    private __nickname: string = '';
    private __email: string = '';
    private __password: string = '';

    private __tasks: Task[] = []
    private __groups: Group[] = []


    constructor(nickname: string, email: string, password: string) {
        this.__nickname = nickname;
        this.__email = email;
        this.__password = password;
    }

    get id() {
        return this.__id;
    }

    get nickname() {
        return this.__nickname;
    }

    get email() {
        return this.__email;
    }

    get password() {
        return this.__password;
    }

    set id(newId) {
        this.__id = newId;
    }

    set nickname(newNickname) {
        this.__nickname = newNickname;
    }

    set email(newEmail) {
        this.__email = newEmail;
    }

    set password(newPassword) {
        this.__password = newPassword;
    }

    get tasks() {
        return this.__tasks;
    }
    
    set tasks(tasks: Task[]){
        this.__tasks=tasks;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    addGroup(group: Group) :Group {
        if (this.__groups.indexOf(group) >= 0)
            throw new Error("Group already exists")

        this.__groups.push(group);
        return group

    }
    
    removeGroup(group: Group) {
        const groupIndex = this.__groups.indexOf(group);

        if (groupIndex < 0)
            throw new Error(`Group ${group.name} not found!`);

        this.__groups.splice(groupIndex, 1);
    }

    getIndexGroup(group:Group) :number{
        return this.__groups.indexOf(group);
    }
    
    getIndexTask(task:Task) :number{
        return this.__tasks.indexOf(task);
    }

    get groups(){
        return this.__groups;
    }
    set groups(groups:Group[]){
        this.__groups = groups;
    }
}

export default User;