const person = {
    firstName: 'Abhishek',
    lastName: "Anand",
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('value is not a string.');


    };

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
}


try {

    person.fullName = "neo sabath"
}

catch (e) {
    console.log(e);
}
console.log(person);