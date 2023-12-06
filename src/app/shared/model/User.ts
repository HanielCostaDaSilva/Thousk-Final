import Group from "./Group";
import Task from "./Task";

class User {
    id ?: string; 
    nickname ?: string;
    email ?: string;
    password ?: string;
    tasks ?: Task[] = [];
    groups ?: Group[] = [];

    constructor(id?: string, user:User ={}){
        this.id = id;
        this.nickname = user.nickname;
        this.email = user.email;
        this.password = user.password;
    }

    /* constructor(
        public nickname: string, 
        public email: string, 
        public password: string) {
    }
 */


}

export default User;