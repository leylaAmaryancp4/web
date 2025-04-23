if(!Array.prototype.Myflat){
    Array.prototype.Myflat = function(depth = 1){
        let result=[];
        function foo(arr,deep){
for(let i = 0; i < arr.length; ++i){
    const item = arr[i];
    if( (Array.isArray(item) && deep > 0) ){
foo(item, deep - 1);
    }else{
        result.push(item);
    }
}
        }
        foo(this,depth);
return result;
    }
}
let arr=[1,2,[3,4]];
console.log(arr.Myflat());
