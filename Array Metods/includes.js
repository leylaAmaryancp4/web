if(!Array.prototype.Myincludes){
    Array.prototype.Myincludes = function(value, fromIndex = 0){
        //if(fromIndex < 0){
           // fromIndex = this.length + fromIndex;
        //}
for(let i = fromIndex; i < this.length; ++i){
    if(this[i] === value || Number.isNaN(this[i]) && Number.isNaN(value)){
return true;
    }
}
return false;
    }
}

let arr=[1,2,3,4,5,NaN];
console.log(arr.Myincludes(4));
console.log(arr.Myincludes(7));
console.log(arr.Myincludes(NaN,4))