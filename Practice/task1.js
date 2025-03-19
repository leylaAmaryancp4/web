function getPreviouseEven(num){//naxord zuyg tiv
    if(num % 2 === 0){
        return num - 2;
    }else{
        return num - 1;
    }
}
console.log(getPreviouseEven(10));