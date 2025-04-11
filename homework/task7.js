//ստանում է զանգված, իրականացնում BinarySearch ռեկուրսիայով
function BinarySearch(arr,key, start = 0, end = arr.length - 1){
    
    if(start > end){
        return -1 ;
    }
    let mid =Math.floor((start + end) / 2);//Գտնում ենք միջին արժեքը ամբողջացնելով
    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] > key){
    return BinarySearch(arr, key,  start, mid - 1 );
}
else{
    return BinarySearch(arr, key, mid + 1, end);
}
}
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(BinarySearch(sortedArray, 7));  // 3 (7-ը գտնվում է 3-րդ ինդեքսում)
console.log(BinarySearch(sortedArray, 11)); // 5