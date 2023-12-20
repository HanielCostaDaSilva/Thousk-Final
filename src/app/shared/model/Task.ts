import User from "./User";

class Task {
    id ?: string;
    author?: User;
    title ?: string;
    description ?: string;
    imageLink ?: string;
    dateStart ?: Date; 
    dateFinal ?: Date | undefined; 
    state ?: string = "waiting"; 
    category ?: string = ""
    /*The state can be:

    { "waiting": when the task is waiting be executed,
    "doing": when the task was being executed by the user,
    "done": when the task was successfully executed.
    }

    */

    constructor(id?:string, task?:Task){
        this.id= task?.id;
        this.author= task?.author;
        this.title= task?.title;
        this.description= task?.description;
        this.imageLink= task?.imageLink;
        this.dateStart= task?.dateStart;
        this.dateFinal= task?.dateFinal;
        this.state= task?.state;
        this.category= task?.category;
    }

}

export default Task;