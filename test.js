function prime(limit) {
    for (let i = 0; i < limit; i++) {
        if (i % 1 === 0 && i % i === 0) {
            console.log(i)
        }
    }
}
prime(26);