function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}





function sortAscendng(arr) {
    return arr.sort((a, b) => a - b);
}