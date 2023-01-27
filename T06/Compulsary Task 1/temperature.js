//This is the program to create a temperature metric converter

let metric = prompt("In which metric is the temperature you are converting?\n C - Celcisus \n F - Fahrenheit \n K - Kelvin") ;
let number = prompt("Enter the number for conversion: ");
let conversion_metric = prompt("In which metric would you like to convert the temperature?\n C - Celcisus \n F - Fahrenheit \n K - Kelvin");
let temp;

if(conversion_metric == "C")
{
    if(metric == "F")
    {
        temp = (number-32) * 5/9;
    }
    if( metric == "K")
    {
        temp = number-273.15;
    }
    console.log(`The metric ${temp}\xB0C is OK`);
}
else if(conversion_metric == "F")
{
    if(metric == "C")
    {
        temp = number * 9/5 + 32;
    }
    if( metric == "K")
    {
        temp = number * 9/5 - 459.67;
    }
    console.log(`The metric ${temp}\xB0F is OK`);
}
else if(conversion_metric == "K")
{
    if(metric == "C")
    {
        temp = number + 273.15;
    }
    if( metric == "F")
    {
        temp = (number+459.67) * 5/9;
    }
    console.log(`The metric ${temp}\xB0K is OK`);
}
else
{
   console.log(`There is a problem while converting metric`);
}
