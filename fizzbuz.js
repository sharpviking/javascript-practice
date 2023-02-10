// const output = fizzBuzz(3);
// console.log(output);


// function fizzBuzz(i) {
//     if (i % 3 == 0) {
//         console.log('Fizz');
//     }  if (i % 5 == 0) {
//         console.log(Buzz);

//     }  if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i);

//     } else {
//         console.log('not a number');
//     }

// }



// let number = i;

// switch (number) {
//     case i % 3 == 0:
//         console.log('Fizz');
//         break;
//     case i % 5 == 0:
//         console.log('Buzz');
//         break;
//     case (i % 3 == 0 & i % 5 == 0):
//         console.log('FzzBuzz');
// }


const outPut = fizzBuzz(17);
console.log(outPut);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';


    if (input % 5 === 0)
        return 'Buzz';

    if (input % 3 === 0)
        return 'Fizz';



    return input

}