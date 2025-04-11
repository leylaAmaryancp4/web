//Ստանում է տեքստ, վերադարձնում ձայնավորների քանակը

function  countVowels(arr){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I', 'O', 'U'];
    let count = 0;
    for(let i = 0; i < arr.length; ++i){
        if(vowels.includes(arr[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, world"));