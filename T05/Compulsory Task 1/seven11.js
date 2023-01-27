let num = prompt("Enter the number:");

if(num%7==0 && num%11== 0)
{
console.log(`${num} is divisible by both 7 and 11`);
}
else if(num%7==0)
{
    console.log(`${num} is divisible by 7`);
}
else if(num%11== 0)
{
    console.log(`${num} is divisible by 11`);
}
else
{
    console.log(`${num} is divisible by neither 7 and 11`);
}