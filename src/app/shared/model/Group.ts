class Group {

    participants?: string[] = [];
    tasks?: Array<any> = [];
    name?: string;
    description?: string;
    dateCreated?: string="";
    authorID?: string;

    constructor(public id?: string, group: Group = {}) {
        this.name = group.name;
        this.description = group.description;
        this.authorID = group.authorID;

    }

}

export default Group;