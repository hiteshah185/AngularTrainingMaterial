export interface Book{
    title:string;
    author:Author;
    price:number;
    publisher:Publisher;
}

export interface Author{
    name:string;
    email:string;
    gender:number;
}
export interface Publisher{
    name:string;
    address:string;
    estYear:number;
}

