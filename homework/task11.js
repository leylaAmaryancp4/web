//Ստանում է երկուական համակարգի տեքստ, ներկայացնում տասական համակարգում
function binaryToDecimal(binary, length) {
    if (length === 0) {
        return 0;
    }
    //վերցնում ենք վերջին նիշը (binary[length - 1]), դարձնում ենք թիվ (- '0'), 
    //այնուհետև գումարում 2 * binaryToDecimal(binary, length - 1):
    return (binary[length - 1] - '0') + 2 * binaryToDecimal(binary, length - 1);
}

function main() {
    let binary = "1101"; // 1101 = 13 տասականում
    let length = binary.length;

    let decimal = binaryToDecimal(binary, length);
    console.log("Decimal:", decimal);
}

main();