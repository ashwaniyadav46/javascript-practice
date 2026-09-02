const accountid = 1234567890;
let accountname = "John Doe";
let accountemail ="john.doe@example.com" ;
var accountpassword = "password123";
accountcity = "New York";
accountcity = "Los Angeles"; // Reassigning the value of accountcity

// ; is not required at the end of each statement in JavaScript, but it is a good practice to usqe it to avoid potential issues with automatic semicolon insertion.
let accountstate; // Declaring a variable without initializing it

console.log("Account ID:", accountid);
console.log("Account Name:", accountname); 
console.log("Account Email:", accountemail);
console.log("Account Password:", accountpassword); 
 
console.log("Account City:", accountcity);
console.log("Account State:", accountstate);
console.table({ accountid, accountname, accountemail, accountpassword, accountcity, accountstate }); // Displaying the variables in a table format 
  