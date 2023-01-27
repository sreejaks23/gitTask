// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

//syntax error - missing paranthesis
console.log("Welcome to the error program"); 

//reference error - should be 'console' instead of 'Console'
console.log("\n"); 

//syntax error - unnecessary '='
let ageStr = "24 years old"; 

//reference error - Integer not defined and logical error - conversion to number is required before adding it to variable 'three
let age = Number(ageStr.match(/\d+/g)); 

//logical error - string does not have appropriate spacing before and after 'age'
console.log("I'm " +age+ " years old."); 

//logical error - conversion to number is required
let three = Number("3"); 

let answerYears = age + three;

//created variable for the reference error and concatenated 0.5(6 months) for the missing months in the below calculation
let answer = answerYears + 0.5; 

//syntax error - missing paranthesis
console.log("The total number of years:" + answerYears); 

answerMonths = answer*12; //syntax error - missing ;

//syntax error - missing paranthesis
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old"); 

//HINT, 330 months is the correct answer