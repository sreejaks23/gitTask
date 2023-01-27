/*Program to check if the given word is palindrome or not*/
let str = prompt("Enter a word: ");
var len = str.length;
let i = 0;

while(i<len/2)
{
    //validate first and last characters are same
    if(str[i] !== str[len-1-i])
    {
        console.log(`${str} is not a palindrome`);
    }
    else
    {
        console.log(`${str} is a palindrome`);
    }
 i++;
}