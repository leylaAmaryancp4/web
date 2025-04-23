if(!Array.prototype.Mymap){
    Array.prototype.Mymap = function(fn){
        let arr =[];
        for(let i = 0; i < this.length; ++i){
             arr[i] = fn(this[i], i, this);

        }

    
    return arr;
}
}
let arr = [1,2,3,4];
let sqr = arr.Mymap(function(elem, index, arr){
    return arr[index] ** 2;
})
console.log(sqr);