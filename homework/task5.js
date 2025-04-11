//ստանում է p թիվ վերադարձնում դրան նախորդող առաջին թիվը, որից արմատ է դուրս գալիս recursiv
function previouseSqr(p){
if(p - 1 <= 0){
    return -1;
    let sqrt = Math.sqrt(p - 1);
    if(Number.isInteger(sqrt)) return(p - 1);
    return previouseSqr(p - 1);
}
}
console.log(previouseSqr(50)); // 49 (7*7)
console.log(previouseSqr(30)); // 25 (5*5)