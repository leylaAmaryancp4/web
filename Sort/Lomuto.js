//pokr elementner linen dzax koxm , mec element aj koxmum linen:
function MyLomuto(arr, low = 0, high = arr.length - 1){
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j < high; ++j){
        if(arr[j] <= pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]  
    
    return i + 1;
}
let arr=[20,10,30,6];
let index = MyLomuto(arr);
console.log(arr);//6,10, 30, 20
console.log(index);//0
