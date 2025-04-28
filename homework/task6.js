//ստանում է զանգված, գտնում այդ զանգվածի մեծագույն տարրը
function maxRecursiv(arr, index = 0,  max = -Infinity){//-Infinity նշանակում է "ամենափոքր հնարավոր թիվը" 
    if(index === arr.length){
        return max;
    }
        max = arr[index] > max ? arr[index] : max;
        return maxRecursiv(arr, index + 1, max);
    

}
console.log(maxRecursiv([3, 1, 8, 2, 10, 4])); // 10
console.log(maxRecursiv([-5, -10, -3, -1, -20])); //-1