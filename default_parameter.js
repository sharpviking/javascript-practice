function interest(principal, rate = 3.5, years = 5) {

    // rate = rate || 3.5;
    // years = years || 5;

    return principal * rate / 100 * years;
}

// console.log(interest(1000));
console.log(interest(1000));