//Ստանում է զանգված, վերադարձնում մեծագույն տարրի ինդեքսը
function MaxIndex(arr){
    let max = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    return index;
}
console.log(MaxIndex([1,2,3,4,5,6]));