function sum(limit) {
    let sum = 0;

    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sum(10));


// function sum(limit) {
//     let sum = 0;

//     for (i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sum(15));


function addition(limit) {
    let add = 0;

    for (i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            add += i;
        }
    }
    return addition;
}
addition(13);