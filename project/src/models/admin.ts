export class User {
    username: string;
    password: string;
    role : string;
    id : number;

    constructor(username: string, password: string , role : string,id:number) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.id=id;
    }
}