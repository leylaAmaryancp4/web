if(!Object.Mycreate){
    Object.Mycreate = function(proto){
        if (proto === null || typeof proto !== "object" && typeof proto !== "function") {
            throw new TypeError("Object prototype must be an object or null");
    }
    //Ստեղծում ենք ֆունկցիա F
     //Նրա prototype-ը դարձնում ենք proto
    //Եվ վերադարձնում ենք new F()՝ այսինքն նոր օբյեկտ, որը ժառանգում է proto-ից
    function F() {}
    F.prototype = proto;
    return new F();
}
}

const animal = {
    speaks: true
  };
  
  const dog = Object.Mycreate(animal);
  dog.barks = true;
  
  console.log(dog.speaks); // true → ժառանգված է
  console.log(dog.barks);  // true → իրենն է

