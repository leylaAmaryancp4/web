//Ստանում է. տեքստ, հաշվում մեծատառերի քանակը
function appercase(text){
    let count = 0;
    for(let i = 0; i < text.length; ++i){
        if(text[i] >='A' && text[i] <= 'Z'){
            count++;
        }
    }
    return count;
}
console.log(appercase("HELLO, worLD"));