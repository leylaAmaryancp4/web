//Ստանում է քառակուսային մատրից, տեղերով փոխում գլխավոր և օժանդակ անկյունագծերի տարրերը
function swapMatrix(matrix){
    let n = matrix.length;
    for(let i = 0; i < matrix.length; ++i){
        let tmp = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = tmp;
    }
    return matrix;

}
console.log(swapMatrix([[1,2,3],[4,5,6],[7,8,9]]));