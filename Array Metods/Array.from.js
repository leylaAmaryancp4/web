if(!Array.Myfrom){
    Array.Myfrom = function(arrayLike,mapfun,thisArg){
        let result =[];
        for(let i = 0; i < arrayLike.length;++i){
            const item = arrayLike[i];
            if(mapfun){
                result.push(mapfun.call(thisArg,item,i));
            }else{
                result.push(item);
            }
        }
return result;

    }
}

const result = Array.Myfrom([1,2,3], x=> x * 10);
console.log(result);