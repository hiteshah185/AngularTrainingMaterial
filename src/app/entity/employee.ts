
export class Employee {
    firstName!:string;
    lastName!:string;
    email!:string;
    phoneNumber!:number;
    age?:number;
    teamName!:TeranetTeam;
    employeeType!:string;
    isActive!:boolean 
    #salary?:number
}
export class Car {
    // id:number;
    protected license:number;
    private owner:string;

    constructor(id:number, license:number, owner:string){
        this.id = id;
        this.license = license;
        this.owner =owner
    }
    static pollutionEmissionRate:number = 900;
    static getProductionYear():number{
        return 11;
    }
  set id(id:number){
    this.id=id;
  }
  get id():number{
    return this.id;
  }
}

var roll:number = 99;



/* The RacingCar class is a subclass of the Car class. */
export class RacingCar extends Car{
    racer:string;
    maxSpeed:number;
    constructor(id:number, license:number,owner:string ,racer:string, maxSpeed:number ){
        super(id, license, owner);
        this.racer = racer;
        this.maxSpeed = maxSpeed;
    }
}

let  ordinaryCar = new Car(99,1234,'Saran')
let superCar = new RacingCar(100,4321,'Rohith','Mike',200);

function myAdder(a:number,b:number){
  return a+b;
}

export type TeranetTeam = 'CMS' | 'Recovery' | 'FM';
type DomainName = "com" | "ca" | "in";
export type Email = `${ string | number}@ ${string | number}.${DomainName}`; 


