//Ստանում է զանգված, որի յուրաքանչյուր տարր կարող է լինել կրկին զանգված: 
// Վերադարձնել զանգվածի տարրերի գումարը:
function foo(arr){
    if(arr.length === 0){
        return 0;
    }
    // Եթե առաջին տարրը զանգված է, ապա հաշվում ենք դրա գումարը ռեկուրսիվ
    if (Array.isArray(arr[0])) {
        return foo(arr[0]) + foo(arr.slice(1)); // Գումարում ենք առաջին զանգվածի գումարը և մնացածի
    }
    // Եթե առաջին տարրը թիվ է, ապա ավելացնում ենք այն մնացածի գումարին
    return arr[0] + foo(arr.slice(1)); // Գումարում ենք առաջին տարրը մնացածի գումարին
}
let arr = [1, [2, 3], [4, [5, 6]], 7];
console.log(foo(arr)); // 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)