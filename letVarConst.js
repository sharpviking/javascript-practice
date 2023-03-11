function example() {
    var x = 1; // function scope
    if (true) {
        let y = 2; // block scope
        const z = 3; // block scope
        console.log(x, y, z); // 1 2 3
    }
    console.log(x, y, z); // 1, ReferenceError: y is not defined, ReferenceError: z is not defined
}
