export function timer(
    prototype: any,
    propertykey:string,
    descriptor: PropertyDescriptor
){
    const orig = descriptor.value;
    descriptor.value = function(...args:[]){
        const start = performance.now();
        orig.apply(this,args);
        const stop = performance.now();
        console.log(`Total Time taken:`,stop-start);
    };
}