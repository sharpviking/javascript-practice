function createPerson(name, age) {
    return {
        name: name,
        age: age,
        sayHello: function () {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
}

const person1 = createPerson('John', 30);
const person2 = createPerson('Jane', 25);

person1.sayHello(); // logs "Hello, my name is John and I'm 30 years old."
person2.sayHello(); // logs "Hello, my name is Jane and I'm 25 years old."
