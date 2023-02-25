const numbers = [1, 2, 3, 4, 1];

const count = countOcccurance(numbers, -1);

console.log(count);


function countOccurance(array, searchElements) {
    // let count = 0;
    // for (let elements in array)
    //     if (elements === searchElements)
    //         count++;
    // return count;


    return array.reduce((accumulator, current) => {
        const occurance = (currrent === searchElements)
        console.log(accumulator, current, searchElements);
        return accumulator + occurance;
    }, 0)
}