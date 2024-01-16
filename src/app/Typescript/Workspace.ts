interface Todo{
    title:string;
    description:string;
}
const todo: readonly <Todo> ={
    title:"Wake up at 5am",
    description: "Morning jogging and exercise for 30 days."
}
readonly const myPhoneNumber:number = 9080898989;
const isActive:boolean = true;
const age:number = 24;
const user:{
    id:number;
    name:string;
    location:string} = {
    id:11,
    name:"Elon Musk",
    location:"California, USA"}

const phoneBook:{mobileNo:number;username:string}[]
let cup:string = "water";
cup = "coffee";
function getArea(radius:number):number{
    return Math.PI*radius*radius;
}
const getFullName= (firstName:string,lastName:string):string =>{
return firstName+lastName
}

interface User{
    id:number;
    name:string
}

const newUser:User={
    id:11,
    name:"Admin"
}
let currentUser:Partial<User>={}
type Domain = ".com" | ".in"
type email= `{string}@{$Domain}`;
type userList = User[]; 
interface Admin extends User {
permission:string[]
}
let masterUser:Admin ={
    id:100,
    name:"Biju",
    permission:["Settings","Authorized","Services"]
}

interface Person{
    name:string;
    smiles():string;
}

class Student implements Person{
    name:string='';
    smiles(): string {
        return "Hello !"
    }
}

type idCardNumber =  number | string;

const getId = (idNumber: idCardNumber):string =>{
    if(typeof idNumber === 'string'){
        return "It's a String";
    }
    return "It's a number";
}

type LoadingState ={
    state:"loading"
}
type FailedState = {
    state:"Failed";
    code:number;
}
type SuccessState = {
    state:"Success";
    response:{
        title:string;
    };
};
type NetworkState = LoadingState | FailedState | SuccessState;

const getTypeNarrowed = (networkState: NetworkState) => {
    if(networkState.state === "Success"){
        return networkState.response;
    } else if(networkState.state === "Failed"){
        return networkState.code;
    }else{
        return "LoadingState";
    }
}
const checkState = (nwkState:NetworkState)=>{
    if("code" in nwkState){
        return nwkState.state;
    }
    return null;
}

const aFunction = (value:Date | string)=>{
    if(value instanceof Date){
        return value.getDay;
    }else{

    }
}