if(!String.prototype.MypadEnd){
    String.prototype.MypadEnd = function(symSize, sym){
         let str = this;
         let newStr = symSize - str.length;
         if(newStr > 0){
         for(let i = 0; i < newStr; ++i){
            str += sym;
         }
}
return str;
    }
};
let str = "hi";
console.log(str.MypadEnd(5,"?"));
console.log(typeof str);