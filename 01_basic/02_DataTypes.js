"use strict"; // Enabling strict mode for better error handling and to prevent certain actions that are considered bad practice in JavaScript newer versions. It helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables.
//alert(3 + 4); // Displaying an alert box with the result of the expression 3 + 4, which will show "7" in the alert dialog.
// Data Types in JavaScript 
let name = "Alice"; // String     
let age = 30; // Number
let isStudent = false; // Boolean  
//symbol and bigint are also data types in JavaScript, but they are less commonly used compared to the ones mentioned above. Symbol is a unique and immutable primitive value that can be used as an identifier for object properties, while BigInt is a numeric data type that can represent integers with arbitrary precision, allowing for very large numbers beyond the limits of the Number type.
let symbolExample = Symbol("uniqueIdentifier"); // Symbol 
let bigIntExample = 1234567890123456789012345678901234567890n; // BigInt, the 'n' at the end indicates that this is a BigInt literal 


let hobbies = ["reading", "traveling", "coding"]; // Array
let address = {    
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
}; // Object
let nullValue = null; // Null
let undefinedValue; // Undefined
console.log("Name:", name); // Logging the value of the variable 'name' to the console cut signifying that it is a string data type 

console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
console.log("Symbol Example:", symbolExample);
console.log("BigInt Example:", bigIntExample);
console.log("Data Types:", typeof name, typeof age, typeof isStudent, typeof hobbies, typeof address, typeof nullValue, typeof undefinedValue, typeof symbolExample, typeof bigIntExample); // Logging the data types of the variables to the console using the 'typeof' operator 
// Difference between let and var in JavaScript:
// 1. Scope: Variables declared with 'let' have block scope, meaning they are only accessible within the block they are defined in (e.g., within a loop or an if statement). Variables declared with 'var' have function scope, meaning they are accessible throughout the entire function they are defined in, regardless of block boundaries.
const id =  Symbol('12345');
console.log(typeof id); // This will log 'symbol' to the console because the variable 'id' is a Symbol data type
const anotherId = Symbol('12345');
console.log(id === anotherId); // This will log 'false' because each Symbol is unique, even if they have the same description, so 'id' and 'anotherId' are not strictly equal.
 
//datatypes primitve and non-primitive
// Primitive data types include: string, number, boolean, null, undefined, symbol, and bigint. These data types are immutable, meaning their values cannot be changed after they are created. When you assign a primitive value to a variable, it holds the actual value.
// Non-primitive data types include: objects (including arrays and functions). These data types are mutable, meaning their values can be changed after they are created. When you assign a non-primitive value to a variable, it holds a reference to the location in memory where the value is stored, rather than the actual value itself.
//heap(non-primitive) and stack(primitive) memory allocation in JavaScript