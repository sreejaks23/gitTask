let input = prompt("Enter an uppercase letter or a lowercase letter or a number");

if (input.toUpperCase() != input.toLowerCase())
{
     if(input === input.toUpperCase())
     {
     console.log(`${input} is an uppercase letter`);
     }
     if(input === input.toLowerCase())
     {
     console.log(`${input} is an lowercase letter`);
     }
}
else if(!isNaN(input))
{
    console.log(`${input} is a number`);
}
else {
    console.log(`${input} is not a letter or number`);
}



