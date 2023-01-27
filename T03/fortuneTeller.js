let motherFname = prompt("Enter your mother's first name: ");
let street = prompt("Enter the name of the street you grow up on: ");
let colour = prompt("Enter your favourite colour: ");
let age = prompt("Enter your current age: ");
let number = prompt("Enter a number between 1 and 10: ");

let meet = number;
//let friendName = motherFname+street;
let getMarried = Math.round(age/number);
let children = age%number;
let hairDye = age-number;

console.log("In " + meet + " years you are going to meet your best friend named "+ motherFname + "\n" + street + 
            ".\nYou will get married in " + getMarried + " years and have "
            + children + " children.\nIn " + hairDye + " years you are going to dye your hair blue.");
