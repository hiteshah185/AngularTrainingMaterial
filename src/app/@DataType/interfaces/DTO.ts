import { Employee } from "src/app/entity/employee";

interface LoggedUser{
    username:string;
    password:string;
}

interface TeamDetails{
    teamName:string;
    teamMembers: Employee[];
    teamManager: Employee;
}



interface Address{
    street:string;
    state:string;
    city:string;
    pinCode?:number;
}

export interface LoginControls{
    login():boolean;
    logout():boolean
}

interface Dictionary{
    [index:number]:string;
}