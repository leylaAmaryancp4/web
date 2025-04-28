if(!Array.prototype.Myevery){
    Array.prototype.Myevery = function(fn, thisarg){
for(let i = 0; i < this.length; ++i){
    if(fn.call(thisarg,this[i],i,this,)){
        return true;
    }
}
    return false;

    }
};

let arr =[18,21,35,42];
let result =arr.Myevery(function(element,index,arr){
    return element >= 18;
})
console.log(result);