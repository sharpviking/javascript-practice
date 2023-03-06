try {

    const numbers = [1, 2, 3, 4];
    const count = countOccurences(numbers, 1);
    console.log(count);

}
catch (e) {
    console.log(e.message);
}


function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.')
    return array.reduce((accumulator, current) => {
        const occurense = (current === searchElement) ? 1 : 0;
        return aacumulator + occurense;
    }, 0);

}