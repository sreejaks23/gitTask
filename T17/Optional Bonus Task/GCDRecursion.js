/* program to calculate the greatest common divisor for two numbers using recursion */

function GCDRecursion(num1,num2)
{
   if(num2 === 0)
   {
    return num1;
   }
   else
   {
    return GCDRecursion(num2, num1%num2);
   }
}

console.log(GCDRecursion(60,15));