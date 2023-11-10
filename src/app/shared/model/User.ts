import Group from "./Group";
import Task from "./Task";

class User {
    id !: string; 
    tasks: Task[] = [];
    groups: Group[] = [];


    constructor(
        public nickname: string, 
        public email: string, 
        public password: string) {
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    getIndexTask(task:Task) :number{
        return this.tasks.indexOf(task);
    }

    addGroup(group: Group) :Group {
        if (this.groups.indexOf(group) >= 0)
            throw new Error("Group already exists")

        this.groups.push(group);
        return group

    }
    
    removeGroup(group: Group) {
        const groupIndex = this.groups.indexOf(group);

        if (groupIndex < 0)
            throw new Error(`Group ${group.name} not found!`);

        this.groups.splice(groupIndex, 1);
    }

    getIndexGroup(group:Group) :number{
        return this.groups.indexOf(group);
    }
    


}

export default User;