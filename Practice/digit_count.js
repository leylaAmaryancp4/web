function digit_count(number){
    let count = 0;
    while(number != 0){
    count++;
     number = (number - (number % 10)) / 10;
     
    }
return count;
}
console.log(digit_count(123));