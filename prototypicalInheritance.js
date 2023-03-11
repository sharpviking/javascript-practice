// Define a parent object with a property and a method
const parent = {
    name: "John",
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Define a child object that inherits from the parent object
const child = Object.create(parent);
child.name = "Jane";

// Call the inherited method on the child object
child.sayHello(); // logs "Hello, my name is Jane"


// In this example, the child object is created using Object.create(parent),
//  which sets the 'child' object's prototype to be the 'parent' object.
//   The child object also has its own name property, which overrides the name property on the parent object.
//    When the sayHello method is called on the child object, JavaScript first looks for the method on the child object itself,
//     but since it doesn't have the method, it looks up the prototype chain to find the method on the parent object,
//      and calls it with this set to the child object.