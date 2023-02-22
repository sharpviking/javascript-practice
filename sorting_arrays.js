// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);


// numbers.reverse();
// console.log(numbers);


const courses = [
    { id: 1, name: 'node.js' },
    { id: 1, name: 'Javascript' },
];

courses.sort(function (nameA, nameB) {

    const nameA = nameA.name.toUpperCase();
    const nameB = nameB.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})
