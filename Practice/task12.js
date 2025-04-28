//Գրել ֆակտորիալի որոշման ֆունկցիա memoizing-ով
let memo = {};
function fact(num){
// Չէ՛մ հաշվում կրկին, եթե արդյունքը արդեն կա memo-ում
if (num in memo) {
    return memo[num];
}

    let result = 1;
    for(let i = 1; i <= num; ++i){
        result *= i;
    }
        memo[num] = result;
    return result;
}
console.log(fact(5));