showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isprime) console.log(number);
}
function isprime(number) {
    let isprime = true;
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}


