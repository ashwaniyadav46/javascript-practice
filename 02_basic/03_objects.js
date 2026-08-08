//singleton 
// A singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. In JavaScript, we can create a singleton using an object literal or a class with a static method.
//example of singleton using object literal
// const singletonObject = {
//   property1: "value1", 
//     property2: "value2",
//     method1: function() {
//         console.log("This is a method in the singleton object.");
//     }
// };
// singletonObject.method1();


//object.create() is a method that creates a new object with the specified prototype object and properties. It allows you to create an object that inherits from another object, enabling you to set up a prototype chain. This is useful for creating objects that share common behavior or properties without using classes or constructor functions.
//example of object.create()
// const parentObject = {
//     greet: function() {
//         console.log("Hello from the parent object!");
//     }
// };  
// parentObject.greet(); // Output: Hello from the parent object!

// object literals are a way to create objects in JavaScript using a simple and concise syntax. They allow you to define an object with properties and methods directly within curly braces {}. Object literals are a convenient way to create objects without the need for a constructor function or class.
// example of object literals
const mySymbol = Symbol("Symbol_1"); // Creating a unique symbol
const person = {
    name: "John", 
    "full name": "John Doe", // property with a space in its name
    30: "age", // property with a number as its key
    age: 30,
    [mySymbol]: "Symbol Value", // property with a symbol as its key
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet(); // Output: Hello, my name is John and I am 30 years old.
console.log(person.name); // Output: John
console.log(person["full name"]); // Output: John Doe
console.log(person[30]); // Output: age
console.log(person[mySymbol]); // Output: Symbol Value
console.log(typeof person[mySymbol]); // Output: string but the key is a symbol
console.log(Object.keys(person)); // Output: [ 'name', 'full name', '30', 'age', 'greet' ]
console.log(person[mySymbol]); // Output: Symbol Value
person.name = "Jane"; // Modifying the name property
Object.freeze(person); // Freezing the object to prevent further modifications
person.age = 35; // This will not change the age property because the object is frozen
console.log(person); 
//example pf this.variable in function// this keyword refers to the current object that the function is a method of. In the greet method, this.name and this.age refer to the name and age properties of the person object. When we call person.greet(), it logs a message using the values of those properties.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
    }
};
console.log(car.getCarInfo()); // Output: Car: Toyota Camry, Year: 2020
