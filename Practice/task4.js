//Ստանում է տեքստ, գտնում տեքստում առկա թվերից մեծագույնը
function largestNumber(text){
    let current = '';
    let arr=[];
    for(let i = 0; i < text.length; ++i){
        if(text[i] >='0' && text[i] <= '9'){
            current += text[i];
        }else{
            if(current !==''){
                arr.push(Number(current));
                current = '';
            }
        }

    }
    if(current !==''){
        arr.push(Number(current));
    }
    if(arr.length === 0){
        return null;
    }
    return Math.max(...arr);
}
console.log(largestNumber("The numbers are 45, 6, 7, 65"));