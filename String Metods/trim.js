if(!String.prototype.Mytrim){
    String.prototype.Mytrim = function(sym){
        let str = this.toString();
        let start = 0;
        let end = str.length - 1;
        let result = "";//0 -i poxaren;
        while(start <= end && str[start] === sym){
            start++;
        }
        while(end >= start && str[end] ===sym){
            end--;
        }
        for(let i = start; i <= end; ++i){
            result += str[i];
        }
        return result;
    }
};
 let result = "???Hello???";
console.log(result.Mytrim("?"));