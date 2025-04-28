//Ստանում է զանգված,, վերադարձնում true, եթե կրկնվող տարրեր չկան, և false հակառակ դեպքում
function duplicate(arr) {
    let seen = new Set();
    for (let i = 0; i < arr.length; ++i) {
        if (seen.has(arr[i])) {
            return false;  // Duplicate found
        }
        seen.add(arr[i]);  // Add the element to the Set
    }
    return true;  // No duplicates
}

console.log(duplicate([1, 2, 3, 4]));  
console.log(duplicate([1, 1, 2, 3, 4]));  