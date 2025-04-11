function is_prime(value){
for(i = 2; i * i < value; ++i){
    if(value % i == 0){ 
        return false;
    }
    return true;
    }

}
/*console.log(is_prime(2));
console.log(is_prime(1));
console.log(is_prime(3));
console.log(is_prime(4));*/

function prime_value( arr, size){
     size = 5;
     arr = [1,2,3,4,5];
     for(let i = 0; i < size; ++i){
        if (is_prime(i)){
            return arr[i];

    }
}
return null;

}
console.log(prime_value(2));
