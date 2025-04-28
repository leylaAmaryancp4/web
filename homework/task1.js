//գրել foo ֆունկցիան այնպես, որ foo(1,2,3,4)(), foo(1)(2)(3)(4)(), 
//foo(1,2)(3)(4)() կամ foo(1,2,3)(4)() կանչերի դեպքում ստանանք թվերի արտադրյալը.
function foo(...args) {
    const product = args.reduce((a, b) => a * b, 1);

    function inner(...innerArgs) {
        if (innerArgs.length === 0) {
            return product;
        }
        return foo(product, ...innerArgs);
    }

    return inner;
}

// Օրինակներ
console.log(foo(1, 2, 3, 4)());     // 24
console.log(foo(1)(2)(3)(4)());     // 24
console.log(foo(1, 2)(3)(4)());     // 24
console.log(foo(1, 2, 3)(4)());     // 24