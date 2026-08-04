// primitive data types 
// there are  seven primitive data types in JavaScript: string, number, boolean, null, undefined, symbol, and bigint.   
// reference data types are objects, arrays, and functions.
// javascript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable.
const id = Symbol("id"); // A symbol representing a unique identifier
const bigIntValue = 1234567890123456789012345678901234567890n; // A bigint representing a large integer value
const anotherid = Symbol("id"); // Another symbol representing a unique identifier
console.log(id === anotherid);
const myObject = { name: "John", age: 30 }; // An object representing a person
const myArray = [1, 2, 3, 4, 5]; // An array of numbers
function myFunction() { // A function that logs a message to the console
  console.log("Hello, World!");
}
// differnce between const and let
// 1. const is used to declare variables that cannot be reassigned, while let is used to declare variables that can be reassigned.
// 2. const variables must be initialized at the time of declaration, while let variables can be declared without initialization and assigned a value later.
console.log("Data type of id:", typeof id); // Logging the data type of the symbol to the console
console.log("Data type of bigIntValue:", typeof bigIntValue); // Logging the data type of the bigint to the console 
console.log(typeof null); // Logging the data type of null to the console (this will log "object" due to a historical quirk in JavaScript)
console.log("Data type of myObject:", typeof myObject); // Logging the data type of the object to the console
console.log("Data type of myArray:", typeof myArray); // Logging the data type of the array to the console (this will log "object" because arrays are a type of object in JavaScript)
console.log("Data type of myFunction:", typeof myFunction); // Logging the data type of the function to the console (this will log "function")