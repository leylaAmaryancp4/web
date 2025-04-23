if (!Array.prototype.MygroupBy) {
    Array.prototype.MygroupBy = function (callback) {
      const result = {};
  
      for (let i = 0; i < this.length; i++) {
        const key = callback(this[i], i, this);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(this[i]);
      }
  
      return result;
    };
  }        
    


const fruits = ["apple", "banana", "avocado", "blueberry", "apricot"];
let result = fruits.MygroupBy(elem => elem[0])
console.log(result);