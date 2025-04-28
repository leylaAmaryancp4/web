let chach ={};
function isPrime(num){
for(let i = 2; i * i <= num; ++i){
    if(num % i === 0){
        chach[num] = false;
        return false;
    }
}
// Եթե թիվը պարզ է, պահպանում ենք արդյունքը մեմոյիզացված արդյունքների մեջ
chach[num]=true;
return true;
}
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false
console.log(isPrime(11));//true;