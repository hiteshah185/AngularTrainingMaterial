export function Unsubscribe(){
return function(constructor:any){
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function(){
        for(let prop in this){
            const property = this[prop];
            if(property && typeof property.unsubscribe === 'function'){
                property.unsubscribe();
            }
        }
        original.apply(this, arguments);
    }
}
}