// "hello"
// "0"
// "false"
// 1
// -1
// []
// {}
// function() {}

let name = "Ashwani";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");
}
//falsy
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
if ("0") {
    console.log("Truthy");
}
// Nullish Coalescing Operator ?? in JavaScript

// The nullish coalescing operator ?? is used to provide a default value when something is null or undefined.
//syntax
// let result = value ?? defaultValue;

console.log(0 || 100);        // 100
console.log(0 ?? 100);        // 0

console.log("" || "Guest");   // Guest
console.log("" ?? "Guest");   // ""

console.log(false || true);   // true
console.log(false ?? true);   // false

console.log(null || "Guest"); // Guest
console.log(null ?? "Guest"); // Guest

console.log(undefined ?? 10); // 10