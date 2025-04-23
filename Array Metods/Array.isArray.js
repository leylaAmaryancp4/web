if(!Array.isMyArray){
    Array.isMyArray = function(value){
        return Object.prototype.toString.call(value) === "[object Array]";
    }
}

console.log(Array.isMyArray([1,2,3]));
console.log(Array.isMyArray(5));