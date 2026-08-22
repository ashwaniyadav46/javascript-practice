// ==========================================
// JAVASCRIPT OBJECT - KEYS, VALUES, ENTRIES
// ==========================================

const myObject = {
    name: "Ashwani",
    age: 21,
    city: "Ghaziabad"
};


// ==========================================
// 1. Object.keys()
// Returns an array containing all KEYS
// ==========================================

console.log(Object.keys(myObject));
// ["name", "age", "city"]


// ==========================================
// 2. Object.values()
// Returns an array containing all VALUES
// ==========================================

console.log(Object.values(myObject));
// ["Ashwani", 21, "Ghaziabad"]


// ==========================================
// 3. Object.entries()
// Returns an array of [key, value] pairs
// ==========================================

console.log(Object.entries(myObject));
// [
//   ["name", "Ashwani"],
//   ["age", 21],
//   ["city", "Ghaziabad"]
// ]


// ==========================================
// 4. for...in
// Used directly with an object
// Gives KEYS
// ==========================================

for (const key in myObject) {
    console.log(key);
}

// name
// age
// city


// ==========================================
// 5. for...in
// Getting VALUES using the key
// ==========================================

for (const key in myObject) {
    console.log(myObject[key]);
}

// Ashwani
// 21
// Ghaziabad


// ==========================================
// 6. for...in
// Getting BOTH key and value
// ==========================================

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

// name : Ashwani
// age : 21
// city : Ghaziabad


// ==========================================
// 7. for...of + Object.keys()
// for...of works because Object.keys()
// returns an ARRAY
// ==========================================

for (const key of Object.keys(myObject)) {
    console.log(key);
}

// name
// age
// city


// ==========================================
// 8. for...of + Object.values()
// Iterates through VALUES
// ==========================================

for (const value of Object.values(myObject)) {
    console.log(value);
}

// Ashwani
// 21
// Ghaziabad


// ==========================================
// 9. for...of + Object.entries()
// Iterates through BOTH key and value
// ==========================================

for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} : ${value}`);
}

// name : Ashwani
// age : 21
// city : Ghaziabad


// ==========================================
// 10. Direct for...of on Object ❌
// Objects are NOT directly iterable
// ==========================================

// for (const value of myObject) {
//     console.log(value);
// }

// ❌ TypeError: myObject is not iterable


// ==========================================
// QUICK REVISION
// ==========================================

// Object.keys(obj)
//      → keys

// Object.values(obj)
//      → values

// Object.entries(obj)
//      → [key, value]

// for...in obj
//      → keys

// for...of Object.keys(obj)
//      → keys

// for...of Object.values(obj)
//      → values

// for...of Object.entries(obj)
//      → key + value

