if(!Array.prototype.Mysome){
    Array.prototype.Mysome = function(fn,thisArg){
for(let i = 0; i < this.length;++i){
    if(fn.call(thisArg,this[i],i,this)){
        return true;
    }
}
    return false;

    }
}

const arr = [-1,-2,-7];
const positiv=arr.Mysome(function(element,index,arr){
    return arr[index] > 0;
})
console.log(positiv);