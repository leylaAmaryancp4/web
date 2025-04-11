function foo(arr){
    let max = arr[0];
    let min = arr[0];
    let maxindex = 0;
    let minindex = 0;
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] > max ){
            max = arr[i];
            maxindex = i;
        }
        if(arr[i] < min){
            min = arr[i];
            minindex = i;
        }
    }
    let tmp = arr[maxindex];
    arr[maxindex] = arr[minindex];
    arr[minindex] = tmp;
    return arr;
}
console.log([1,2,3,4,5]);