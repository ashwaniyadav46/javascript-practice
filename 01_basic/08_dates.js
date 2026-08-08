let myDate = new Date(); // Create a new Date object representing the current date and time
console.log("Current Date and Time:", myDate);// Output: Current Date and Time: [current date and time]
console.log(myDate.toString()); // Output: [current date and time as a string]
let specificDate = new Date("2024-01-01"); // Create a new Date object representing January 1, 2024
console.log("Specific Date:", specificDate);
//myDate in universal time format
console.log("Current Date and Time in UTC:", myDate.toUTCString()); // Output: Current Date and Time in UTC: [current date and time in UTC]
console.log(myDate.toISOString()); // Output: [current date and time in ISO 8601 format] 
console.log(myDate.toDateString()); // Output: [current date as a string]
console.log(myDate.toTimeString()); // Output: [current time as a string]
console.log(myDate.getFullYear()); // Output: [current year]
console.log(myDate.getMonth()); // Output: [current month (0-11)]
console.log(myDate.getDate()); // Output: [current day of the month (1-31)]
console.log(myDate.getDay()); // Output: [current day of the week (0-6, where 0 is Sunday)]
console.log(myDate.getHours()); // Output: [current hour (0-23)]
console.log(myDate.getMinutes()); // Output: [current minute (0-59)]
console.log(myDate.getSeconds()); // Output: [current second (0-59)]    
console.log(myDate.getMilliseconds()); // Output: [current millisecond (0-999)]
console.log(myDate.toLocaleString()); // Output: [current date and time in local format]
let mytimestamp = myDate.getTime(); // Get the timestamp (milliseconds since January 1, 1970)
console.log("Timestamp:", mytimestamp); // Output: Timestamp: [current timestamp]
let mytimestamp1 = Date.now(); // Get the current timestamp (milliseconds since January 1, 1970)
console.log("Current Timestamp:", mytimestamp1); // Output: Current Timestamp: [current timestamp]

console.log("Current Date in Long Format:", myDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Output: Current Date in Long Format: [current date in long format]


