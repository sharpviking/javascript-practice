function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let sumOfEven = sumOfEvenNumbers(numbers);

console.log(sumOfEven);



function sumofEvenNumbers1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }

    return sum;
}

