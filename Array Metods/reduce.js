if(!Array.prototype.Myreduce){
    Array.prototype.Myreduce = function(fn,initValue){
        let acc = initValue;
        for(let i = 0; i <this.length;++i){
            acc = fn (acc,this[i], i, this);
        }
        return acc;


    }
}

let arr = [1,2,3,4];
let sum = arr.Myreduce(function(acc,curr){
    return acc + curr;
},0);
console.log(sum);