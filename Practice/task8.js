//Ստանում է քառակուսային մատրից, վերադարձնում գլխավոր անկյունագծի փոքրագույն տարրը
function primediagonal(matrix){
    let min = matrix[0][0];
    for(let i = 1; i < matrix.length; ++i){
        if(matrix[i][i] < min){
            min = matrix[i][i];
        }
    }
    return min;
}
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log( primediagonal(matrix))
;