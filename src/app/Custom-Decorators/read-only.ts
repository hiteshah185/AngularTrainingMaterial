export function readOnly(prototype:any, name:string){
    Object.defineProperty(prototype,name,{
        writable:false,
    })
}