function MyHoare(arr, low , high ){
    let i = low;
    let j = high;
    let pivot = arr[Math.floor((low + high) / 2)];
    while(i<= j){
        while(arr[i] < pivot) i++;

while(arr[j]>pivot) j--;

if(i <= j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
}

    }
    return j;
}
function quickSort(arr,start,end){
    if(start < end){
        let partionIndex=MyHoare(arr,start,end);
        quickSort(arr,start ,partionIndex - 1);
        quickSort(arr,partionIndex + 1,end);
    }
}
let arr = [8,3,1,7,9,5];
quickSort(arr, 0,arr.length - 1)
console.log(arr);
