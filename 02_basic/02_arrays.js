const marvelHeroes = ["Iron Man", "Captain America", "Thor" ];
const dcHeroes = ["Superman", "Batman", "Wonder Woman"];
// console.log(marvelHeroes);
// marvelHeroes.push(dcHeroes); 
// console.log(marvelHeroes); 
const allHeroes = marvelHeroes.concat(dcHeroes); // Merging two arrays
console.log(allHeroes);
const allnewheroes = [...marvelHeroes, ...dcHeroes]; // Merging two arrays using spread operator
console.log(allnewheroes);
const anotherArray = [1, [2, 3], 4, 5,[6,[7,8],9],10];
const realanotherArray = anotherArray.flat(Infinity); // Flattening the array to a depth of Infinity
console.log(realanotherArray);
console.log(Array.isArray(marvelHeroes)); // Checking if marvelHeroes is an array
console.log(Array.isArray("Hello")); // Checking if a string is an array
console.log(marvelHeroes.includes("Thor")); // Checking if "Thor" is in the marvelHeroes array
console.log(Array.from("Hello")); // Creating an array from a string
console.log(Array.from({ length: 5 }, (_, index) => index + 1)); // Creating an array of numbers from 1 to 5
console.log(Array.from({Name: "John", age: 30})); // Creating an array from an object (this will create an empty array because the object is not iterable)
let score1 = 100; 
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Creating an array from individual values

// map and filter are higher-order functions that operate on arrays. The map() method creates a new array by applying a provided function to each element of the original array, while the filter() method creates a new array containing only the elements that satisfy a specified condition.
//example of map and filter:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num); // Creating a new array with the squares of the original numbers. it is mapping each element of the numbers array to its square and returning a new array with the squared values.
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
const evenNumbers = numbers.filter(num => num % 2 === 0); // Creating a new array with only the even numbers from the original array it is filtering the numbers array and returning a new array with only the even numbers
console.log(evenNumbers); // Output: [2, 4]


