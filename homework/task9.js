//Ստանում է թիվ, ներկայացնում այդ թիվը երկուական համակարգում recursive
function binar(num){
if(num === 0){
    return '';
}
return binar(Math.floor(num / 2)) + (num % 2);
//karox enk 
// return binar(parseInt(num / 2)) + (num % 2);
}
console.log(binar(10));