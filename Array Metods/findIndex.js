if(!Array.prototype.MyfindIndex){
    Array.prototype.MyfindIndex = function(fn){
for(let i = 0; i < this.length; ++i){
    if(fn(this[i], i, this)){
        
        return  i;
        
    }
}
return -1;
    }
}
let arr = [1,2,3,4,5];
let index = arr.MyfindIndex(function(element, index, arr){
return element % 2 == 0;
})
console.log(index);