const first = [1, 2, 3];
const second = [5, 7, 9];

const combined = [...first, 'a', ...second, 'c'];

// console.log(combined);

// const copy = combined.slice();

const copy = [...combined];
console.log(copy);