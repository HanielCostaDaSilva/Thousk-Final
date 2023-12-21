class Task {
    id?: string;
    title?: string;
    description?: string;
    imageLink?: string;
    dateStart?: Date;
    dateFinal?: Date | undefined;
    state?: string = "waiting";
    category?: string = ""

    constructor(id?: string, task?: Task) {
    }

}

export default Task;