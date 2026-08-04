let score ="100"; // A string variable representing a score
let numericScore = Number(score); // Converting the string to a number using the Number() function
console.log("Numeric Score:", numericScore); // Logging the numeric score to the console    
console.log("Type of Numeric Score:", typeof numericScore); // Logging the data type of numericScore to the console
let score1="abc100"; // A string that cannot be converted to a number
let invalidScore = Number(score1); // This will result in NaN (Not a Number)
console.log("Invalid Score:", invalidScore); // Logging the invalid score to the console
console.log("Type of Invalid Score:", typeof invalidScore); // Logging the data type of invalidScore to the console
let score2=true; // A boolean variable
let numericScore2 = Number(score2); // Converting the boolean to a number (true will be converted to 1)
console.log("Numeric Score from Boolean:", numericScore2); // Logging the numeric score obtained from the boolean conversion to the console
console.log("Type of Numeric Score from Boolean:", typeof numericScore2); // Logging the data type of numericScore2 to the console  
let score3="ashwani"; // A string that cannot be converted to a number
let invalidScore2 = Number(score3); // This will also result in NaN (Not a Number)
console.log("Invalid Score 2:", invalidScore2); // Logging the invalid score to the console
console.log("Type of Invalid Score 2:", typeof invalidScore2); // Logging the data type of invalidScore2 to the console
let score4= null; // A null value
let numericScore4 = Number(score4); // Converting null to a number (null will be converted to 0)
console.log("Numeric Score from Null:", numericScore4); // Logging the numeric score obtained from the null conversion to the console
console.log("Type of Numeric Score from Null:", typeof numericScore4); // Logging the data type of numericScore4 to the console
let score5=undefined; // An undefined value
let numericScore5 = Number(score5); // Converting undefined to a number (undefined will be converted to NaN)
console.log("Numeric Score from Undefined:", numericScore5); // Logging the numeric score obtained from the undefined conversion to the console
console.log("Type of Numeric Score from Undefined:", typeof numericScore5); // Logging the data type of numericScore5 to the console
let someno=100;
let stringScore = String(someno); // Converting the number to a string using the String() function
console.log("String Score:", stringScore);
console.log("Type of String Score:", typeof stringScore); // Logging the data type of stringScore to the console 
let value=3.14;
let negativeValue=-value;
console.log("Negative Value:", negativeValue);
console.log(1+"2"); // This will result in "12" because the number 1 is converted to a string and concatenated with the string "2"
console.log(+true); // This will result in 1 because the unary plus operator converts true to a number
console.log("1" +2 +2);
console.log(1 + 2 +"2");
console.log(+true);