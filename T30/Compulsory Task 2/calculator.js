/*Program to create calculator*/

let num1 = Number(prompt("Please enter the first number: "));
let num2 = Number(prompt("Please enter the second number: "));
let operation = prompt("What operation would like to perform: ");
let value;


let add = (a, b) =>{
  value = a + b;
  return value;
};

//function to subtract the given numbers
let subtract = (a,b) =>{
  value = a-b;
  return value;
}

//function to multiply the given numbers
let multiply = (a,b) =>{
  value = a*b;
  return value;
}

//function to divide the given numbers
let divide = (a,b) =>{
  value = a/b;
  return value;
}

if(operation == "add")
{
console.log(`${num1} + ${num2} = ${add(num1,num2)}`);
}
if(operation == "subtract")
{
console.log(`${num1} - ${num2} = ${subtract(num1,num2)}`);
}
if(operation == "multiply")
{
console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);
}
if(operation == "divide")
{
console.log(`${num1} / ${num2} = ${divide(num1,num2)}`);
}
