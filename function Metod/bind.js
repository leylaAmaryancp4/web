if (!Function.prototype.Mybind) {
    Function.prototype.Mybind = function(thisArg, ...boundArgs) {
      if (typeof this !== "function") {
        throw new TypeError("Bind must be called on a function");
      }
  
      const originalFn = this;
  
      return function(...laterArgs) {
        return originalFn.apply(thisArg, [...boundArgs, ...laterArgs]);
      };
    };
  }
  function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  const greetInArmenian = greet.Mybind(null, "Բարև");
  
  greetInArmenian("Աննա"); // 👉 Բարև, Աննա!
  