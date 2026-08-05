//concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: Full Name: John Doe
//string interpolation
let age = 30;
let greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John Doe and I am 30 years old.
const gameName = new String("Chess");
console.log("Game Name:", gameName); // Output: Game Name: [String: 'Chess']
console.log(gameName[0]); // Output: C
console.log(gameName.__proto__); // Output: [String: 'Chess'].__proto__ (this will log the prototype of the String object)
// .length charat indexof touppercase example
console.log(gameName.length); // Output: 5
console.log(gameName.charAt(0)); // Output: C
console.log(gameName.indexOf("e")); // Output: 1
console.log(gameName.toUpperCase()); // Output: CHESS
//substring slice substr example
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.slice(7, 12)); // Output: World
console.log(str.substr(7, 5)); // Output: World
//trim example
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // Output: Hello, World!
//split example
let csv = "John,Doe,30";    
let parts = csv.split(",");
console.log(parts); // Output: [ 'John', 'Doe', '30' ]
//replace example
let strToReplace = "Hello, World!";
const newStr = strToReplace.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!
//includes example
let strToCheck = "Hello, World!";
console.log(strToCheck.includes("World")); // Output: true