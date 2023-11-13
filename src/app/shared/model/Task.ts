import User from "./User";

class Task {
    id !: string;
    author!: User;

    /*The state can be:

    { "waiting": when the task is waiting be executed,
    "doing": when the task was being executed by the user,
    "done": when the task was successfully executed.
    }

    */

    constructor(
        public title: string,
        public description: string,
        public imageLink: string,
        public dateStart: Date, 
        public dateFinal: Date | undefined, 
        public state: string = "waiting", 
        public category: string = "") {
    }

}

export default Task;