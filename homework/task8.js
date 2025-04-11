//ստանում է զանգված, իրականացնում BinarySearch iterative
function BinarySearch(arr, key, start = 0, end = arr.length - 1){
    while(start <=end){
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] > key){
        end = mid - 1;
        
    }else{
        start = mid + 1;
        
    }
}
return -1;
}
let sortedArray=[1,2,3,4,5,6];
console.log(BinarySearch(sortedArray, 7));//-1
console.log(BinarySearch(sortedArray, 5));//4