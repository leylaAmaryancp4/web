function isItNaN(value){
    return value !== value;
}
    console.log(isItNaN(NaN));//nan != nan //true;
    console.log(isItNaN(123));//123 != 123//false
    console.log(isItNaN("Hello"));//hello != hello//false;

    function sumEquality(value1, value2,result){

         return Math.round((value1 + value2) * 10) / 10 === result;

        }
    console.log(sumEquality(0.1,0.2,0.3));//true
    console.log(sumEquality(10,20,40));//false
    console.log(sumEquality(1,2,3));//true
