if(!Array.isMyArray){
    Array.isMyArray = function(value){
        return value instanceof Array;
    }
}

console.log(Array.isMyArray([1,2,3]));
console.log(Array.isMyArray(5));
