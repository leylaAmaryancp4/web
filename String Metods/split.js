if(!String.prototype.MySplit){
    String.prototype.MySplit = function(separator,limit){
        let result = [];
        let current = '';
        
        for(let i = 0; i < this.length; ++i){
            if(this[i] === separator)
            {
                result.push(current);
                current = '';
                if(limit !== undefined && result.length >= limit)
                    break;
            }else{
                current += this[i];

            }
        }
        result.push(current);
        return result;
    }
}
let text = "apple, banan, cherry";
let result = text.MySplit(",",2
    
);
console.log(result);
