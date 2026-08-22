const greeting = ["Hello", "Hi", "Namaste"];

for (const greet of greeting) {
    console.log(`The greeting is: ${greet}`);
}

// const map = new Map();

// // set() → add key-value pair
// map.set("name", "Ashwani");
// map.set("age", 21);
// map.set("city", "Ghaziabad");

// // get() → get value using key
// console.log(map.get("name"));   // Ashwani
// console.log(map.get("age"));    // 21

// // has() → check whether key exists
// console.log(map.has("name"));   // true
// console.log(map.has("email"));  // false

// // size → number of key-value pairs
// console.log(map.size);          // 3

// // delete() → remove a key-value pair
// map.delete("age");

// // check again
// console.log(map.has("age"));    // false

// // clear() → remove everything
// map.clear();

// console.log(map.size);          // 0


const map = new Map();

map.set("name", "Ashwani");
map.set("age", 21);
map.set("city", "Ghaziabad");

console.log(map)

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

//maps are iterable and contains unique element but myobject cannnot be iterable in the same manner like map; for object there is diifrent rules

