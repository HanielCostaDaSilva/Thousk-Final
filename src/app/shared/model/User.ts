import Task from "./Task";

class User{
    private __id !: number;
    private __nickname :string ='';
    private __email: string ='';
    private __password: string ='';
    
    private __tasks: Task[] = [] 


    constructor(id:number, nickname:string, email:string, password:string){
        this.__id = id;
        this.__nickname = nickname;
        this.__email = email;
        this.__password = password;
    }

    get id(){
        return this.__id;
    } 

    get nickname(){
        return this.__nickname;
    } 

    get email(){
        return this.__email;
    } 

    get password(){
        return this.__password;
    } 

    set id(newId){
        this.__id = newId;
    }

    set nickname(newNickname){
        this.__nickname = newNickname;
    }

    set email(newEmail){
        this.__email = newEmail;
    }

    set password(newPassword){
        this.__password = newPassword;
    }



}

export default User;