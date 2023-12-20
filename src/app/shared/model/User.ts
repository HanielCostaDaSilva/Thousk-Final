class User {
    id ?: string; 
    nickname ?: string;
    email ?: string;
    password ?: string;
    tasks ?: Array<any> = [];
    groups ?: string[] = [];

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