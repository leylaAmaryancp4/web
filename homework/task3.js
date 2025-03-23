function use(initialValue) {
    let value = initialValue;

    function get() {
        return value;
    }

    function set(newValue) {
        value = newValue;
    }

    function reset() {
        value = initialValue;
    }

    return [get, set, reset];
}

// Օգտագործման օրինակ
const [get, set, reset] = use(10);
console.log(get()); // 10
set(100);
console.log(get()); // 100
set(get() + 4);
console.log(get()); // 104
set(200);
console.log(get()); // 200
reset();
console.log(get()); // 10