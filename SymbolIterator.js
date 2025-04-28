Number.prototype[Symbol.iterator]= function(){
    const num = this;
    let nums = num.toString()
    let i = 0; return{
        next(){
            return{
                value: nums[i],
                done: i++===nums.length
            }
        }
    }
}

let num = 1234;

for(let i of num){
    console.log(i);
}
