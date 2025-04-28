if(!Function.prototype.Myapply){
    Function.prototype.Myapply = function(thisArg,argsArray){
        if(typeof this !== "function"){
            throw new TypeError("Not a function");
        }

        //«Եթե thisArg չեք փոխանցել, կամ այն null/undefined է, ապա օգտագործի global context-ը (globalThis)։»
        thisArg = thisArg || globalThis; 

    const uniqueKey = Symbol("fn"); // զերծ մնալ name conflict-ից
    thisArg[uniqueKey] = this;

    const result = Array.isArray(argsArray)
      ? thisArg[uniqueKey](...argsArray) : thisArg[uniqueKey]();

    delete thisArg[uniqueKey];

    return result;
  };
}

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  greet.Myapply(null, ["Barev", "Anna"]);

    

