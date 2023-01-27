/* Series of programs */

//while loop to display count from 20 to 0
let i = 20;
while(i>=0)
{
    console.log(i);
    i--;
}


//program to display all the even numbers between 1 to 20
for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


//program to display *pyramid
let string = "";
for(i=1;i<=5;i++)
{
    for(j=0;j<i;j++)
    {
        string += "*";
    }
    string += "\n";
}
console.log(string);