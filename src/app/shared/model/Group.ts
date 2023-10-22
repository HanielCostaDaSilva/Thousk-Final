import User from "./User";
import Task from "./Task";

class Group{
    private __id !: number;
    private __name!: string;
    private __description !: string;
    private __dateCreaton !: string;
    private __category !: string;
    
    //============Relationship
    private __userCreator !:User;  
    private __participants !:User[];
    private __tasks !: Task[];

    constructor(id:number, name :string , description :string , dateCreaton :string , category:string){
    this.__id = id 
    this.__name = name 
    this.__description = description 
    this.__dateCreaton = dateCreaton
    this.__category = category 
    }

    get id(){
        return this.__id
    }
    get name(){
        return this.__name
    }
    get description(){
        return this.__description
    }
    get dateCreaton(){
        return this.__dateCreaton
    }
    get category(){
        return this.__category
    }

    set id(newId:number){
        this.__id = newId;
    }
    set name(newname:string){
        this.__name = newname;
    }
    set description(newdescription:string){
        this.__description = newdescription;
    }
    set dateCreaton(newdateCreaton:string){
        this.__dateCreaton = newdateCreaton;
    }
    set category(newcategory:string){
        this.__category = newcategory;
    }
}

export default Group