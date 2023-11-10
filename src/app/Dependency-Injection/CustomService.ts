export class CustomLoggingService{

//    constructor(name:String){}

    public logging(message:string){
        //Write Reusable Business Logic here
        console.log(message);
    }
    public warn(message:string){
        console.warn(message);
    }
    public alert(message:string){
        window.alert(message);
    }

}