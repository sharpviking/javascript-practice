// // // const printMyname = (name) => {
// // //     console.log(name);
// // // }

// // // printMyname('neelkanth');


// // // const multiply = number => number * 2;

// // // console.log(multiply(26));


// class Human {

//     gender = 'male';

//     printGender() {
//         console.log(this.gender);
//     }
// }


// class person extends Human {

//     name = "Anand";
//     gender = 'male';

//     printMyname() {
//         console.log(this.name);
//     }
// }

// const person = new person();
// person.printMyname();
// person.printGender();


// const number = [1., 12, 13, 14];
// const newNumber = [...number, 4, 5, 7];

// console.log(newNumber);

// const person = {
//     name: 'Abhishek'
// };

// const newPerson = {
//     ...person,
//     age: 31
// }

// console.log(newPerson);


// const filter = (...abc) => {
//     return abc.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3));


// const person = {
//     name: 'Max'
// };
// const secondPerson = {
//     ...person
// };
// person.name = 'Abhishek';
// console.log(secondPerson);

const number = [1, 2, 3];

const doubleNumArray = number.map((num) => {
    return num * 2;
});

console.log(number);
console.log(doubleNumArray);