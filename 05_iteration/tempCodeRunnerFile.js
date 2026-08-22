const coding = ["js", "python", "cpp", "java"];

// // ==========================================
// // 1. forEach with a callback function
// // ==========================================

// coding.forEach(function (item) {
//     console.log(item);
// });


// // ==========================================
// // 2. forEach with arrow function
// // ==========================================

// coding.forEach((item) => {
//     console.log(item);
// });


// // ==========================================
// // 3. Separate function + callback
// // ==========================================

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);


// // ==========================================
// // 4. Callback with index
// // ==========================================

// coding.forEach(function (item, index) {
//     console.log(index, item);
// });


// // Output:
// // 0 "js"
// // 1 "python"
// // 2 "cpp"
// // 3 "java"


// // ==========================================
// // 5. Callback with item, index and array
// // ==========================================

// coding.forEach(function (item, index, arr) {
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// });
