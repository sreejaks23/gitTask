// This example program is meant to demonstrate errors.
 
let greeting = Hello ; // compilation error - missing "double quotes"
let name = "Sree" // compilation error - missing ;
let number = 5;

//Runtime error - 'number' needs to cast with String()
//logical error - message does not have appropriate spacing
let message = greeting + "My name is" + name + ".My lucky number is" +number; 
 
console.log(message);
