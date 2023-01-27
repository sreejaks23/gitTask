/*Program to create Word Manipulation*/

let word = prompt("Please enter a word: ");
let replaceWith, upper, result;

console.log(replaceWord(word));
console.log(reverseWord(word));
console.log(toUpper(word));
console.log(calculateASCII(word));

//function to replace every second occurrence in a word
function replaceWord(word)
{
  let str = word.split("");

  for (let i = 1; i <= str.length - 1; i+=2) 
  {
      str[i] = "!";
  }
  replaceWith = str.join("");
  return replaceWith;
}

//function to reverse the string
function reverseWord(word)
{
  return word.split("").reverse().join("");
}

//function to replace every sixth letter to uppercase
function toUpper(word)
{
  let str = word.split("");
  for (let i = 5; i < str.length; i+=6) 
  {
    str[i] = str[i].toUpperCase();
  }
  upper = str.join(" ");
  return upper;
}

//function to calculate ASCII values of each letter in the word
function calculateASCII(word)
{
  let str = word.split("");
  for (let i = 0; i < str.length; i++) 
  {
    str[i] = str[i].charCodeAt();
  }
  result = str.join(" ");
  return result;
}
