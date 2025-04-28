if (!Function.prototype.Mycall) {
    Function.prototype.Mycall = function(thisArg, ...args) {
      if (typeof this !== "function") {
        throw new TypeError("Mycall must be called on a function");
      }
  
      thisArg = thisArg || globalThis;
  
      const uniqueKey = Symbol("fn");
      thisArg[uniqueKey] = this;
  
      const result = thisArg[uniqueKey](...args);
  
      delete thisArg[uniqueKey];
  
      return result;
    };
  }

  function sayName(age) {
    console.log(`I am ${this.name}, ${age} years old`);
  }
  
  const person = { name: "Ani" };
  
  sayName.Mycall(person, 23);
  // ➤ I am Ani, 23 years old


 /* Ստուգում ենք, որ this-ը ֆունկցիա է։

1 Եթե thisArg չկա, օգտագործում ենք globalThis

2 Ստեղծում ենք անվտանգ Symbol բանալի, օրինակ՝ Symbol("fn")

3 Կցում ենք ֆունկցիան այդ բանալու ներքո

4 Կանչում ենք այդ ֆունկցիան thisArg-ի վրա

5 Հետո մաքրում ենք այդ property-ն

6 Վերադարձնում ենք արդյունքը*/