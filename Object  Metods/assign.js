if(!Object.Myassign){
    Object.Myassign = function(target,...sources){
        if(target == null){
            throw new TypeError("Target can not be null or undefined");
        }
        
        
        for(let i = 0; i < sources.length; ++i){
            let source = sources[i];
            if(source != null){
                for(let i in source){
                    if (source.hasOwnProperty(i)){
                        target[i] = source[i];
                    }
                }
            }
        }
        
        return target;
        


    }
}
let target = {a:1};
const source1={b:3};
const source2={c:4};
const source3={b:5};
 target=Object.Myassign(target,source1,source2,source3);
console.log(target);
