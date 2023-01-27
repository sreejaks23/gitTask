/*Program to create Number Manipulation*/

const array = [];

for(i=0;i<10;i++)
{
  const input = Number(prompt("Please enter 10 numbers(Whole numbers and decimal numbers: "));
  array.push(input);  
}

//console.log(array);

console.log("Total of all the numbers :" + calculateTotal(array));
console.log("Index of the maximum value: " + calculateMax(array));
console.log("Index of the minimum value: " + calculateMin(array));
console.log("Average of the numbers: " + Average(array));
console.log("Median number: " + Median(array));

//function to calculate total of all the numbers in the list
function calculateTotal(num)
{
  let sum = 0;
  for(i=0;i<num.length;i++)
  {
    sum +=num[i];
  }
  return sum;
}

//function to calculate index of the maximum value in the list
function calculateMax(num)
{
  const max = Math.max.apply(null, num);
  const index = array.indexOf(max);
  return index;
}

//function to calculate index of the minimum value in the list
function calculateMin(num)
{
  const min = Math.min.apply(null, num);
  const index = num.indexOf(min);
  return index;
}

//function to calculate average of the numbers and round off to 2 decimal places
function Average(num)
{
  let sum = num.reduce(function(a, b){
  return a + b;
  }, 0); 
  average = sum/num.length;
  const roundOf = average.toFixed(2);
  return roundOf;
}

//function to calculate the median number
//source: https://masteringjs.io/
function Median(num) 
{
  if (num.length == 0) {
    return; 
  }
  num.sort((a, b) => a - b); 
  const midpoint = Math.floor(num.length / 2); 
  const median = num.length % 2 === 1 ?
    num[midpoint] : 
    (num[midpoint - 1] + num[midpoint]) / 2; 
  return median;
}
