/*Program to calculate average of numbers */

let numbers = [];
let average;

while(true)
{
    let input = Number(prompt("Enter the number: "));
    if(input == -1)
    {
        console.log(average);
       // console.log(sum);
        break;
    }
    numbers.push(input);
    let sum = numbers.reduce(function(a, b){
        return a + b;
    }, 0); //to calculate sum of array (source: stackoverflow)
    average = sum/numbers.length;
}