let input = prompt("Enter the number of litres of water used");
let rands;

if(input <= 6000)
{
    rands = (input*15.73)/1000;
}
else if(input > 6000 &&  input <= 10500)
{
    rands = ((6000*15.73)+((input-6000)*22.38))/1000;
}
else if(input > 10500 && input <= 35000)
{
    rands = ((6000*15.73)+(4500*22.38)+((input-10500)*31.77))/1000;
}
else
{
    rands = ((6000*15.73)+(4500*22.38)+(24500*31.77)+((input-35000)*69.76))/1000;
}
console.log("Total Rands(R) to be paid:" +rands);
