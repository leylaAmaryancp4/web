/*class Unique{
    static[Symbol.hasInstance](obj){
        if(!Array.isArray(obj)){
            return false;
        }

       // new Set(instance) ստեղծում է Set — որը ավտոմատ հեռացնում է կրկնվող արժեքները։
    const set = new Set(obj);
    return set.size === obj.length;
    }

}
let arr = [1,2,3];
let arr2 = [1,1,2];
console.log(arr instanceof Unique);
console.log(arr2 instanceof Unique);*/

class Primitive{
    static[Symbol.hasInstance](num){
        const type = typeof num
        return type === "string" || type=== "number"|| type==="boolean"|| type === "bigint"|| 
        type ==="symbol"|| type ==="null"||type ==="undefined";
    }

}
console.log(123 instanceof Primitive)
console.log("Hello" instanceof Primitive)
console.log(true instanceof Primitive)
console.log(123n instanceof Primitive)
console.log(Symbol('sym') instanceof Primitive)
console.log(null instanceof Primitive)
console.log(undefined instanceof  Primitive )

console.log([] instanceof Primitive)
console.log({} instanceof Primitive)
console.log(function(){} instanceof Primitive)

