//Ստանում է զանգված, վերադարձնում առաջին զույգ տարրի ինդեքսը
function EvenIndex(arr){
    let index = -1;//ete zuyg tiv chka kta -1;
    for(let i = 0; i < arr.length; ++i){
        if((arr[i] % 2) === 0){
            index = i;
            break;
        }
    }
    return index;
}
console.log(EvenIndex([1,3,3,7,6,9]));