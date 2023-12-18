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
        
}

export default Group