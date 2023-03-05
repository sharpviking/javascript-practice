// const sum = (a, b) => {
//     console.log(a + b)
// }
// sum(3, 5);


function sum(...items) {

    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// const numbers = [3, 5, 8, 11, 26];

// const max = Math.max(...numbers)

// console.log(max);