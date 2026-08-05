const score = 400;
console.log(score);
const balance = new Number(1000);
console.log(balance);
console.log(balance.valueOf());
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const price = 111199.99;
console.log(price.toPrecision(4));
//toPrecision() method formats a number to a specified length, rounding if necessary. It returns a string representation of the number with the specified precision.
const hundreds = 1000000000;
console.log(hundreds.toLocaleString("en-US")); // Output: 1,000,000,000
console.log(hundreds.toLocaleString("en-IN")); // Output: 1,00,00,00,000

//+++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI);//
console.log(Math.E); //
console.log(Math.SQRT2);
console.log(Math.abs(-5)); // Output: 5
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.random() * 10); // Output: A random number between 0 and 10
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10)) + 1); // Output: A random integer between 1 and 10

