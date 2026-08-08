const myarray = [1, 2, 3, 4, 5];
console.log(myarray);
console.log(myarray[0]); // Output: 1
myarray.push(6); // Adding an element to the end of the array
console.log(myarray);
myarray.pop(); // Removing the last element from the array
console.log(myarray);
myarray.unshift(0); // Adding an element to the beginning of the array
console.log(myarray);
myarray.shift(); // Removing the first element from the array
console.log(myarray);
console.log(myarray.length);
console.log(myarray.indexOf(3)); // Output: 2
const newArray = myarray.slice(1, 4); // Creating a new array from index 1 to 3
console.log(newArray);
const newarray1 = myarray.splice(1, 2); // Removing 2 elements from index 1 // output: [2, 3] //splice does not return a new array, it modifies the original array and returns the removed elements
console.log(newarray1);
console.log(myarray);
const newarray3 = myarray.join(", "); // Joining the array elements into a string
console.log(newarray3);
