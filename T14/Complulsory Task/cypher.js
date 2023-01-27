/* Program to create a cypher to write up secret messages */

let message = prompt("Please enter the message that you would like to encode: ");
let shift = 15;

console.log("The encoded message is " + "'" + encodeMessage(message,15) + "'");

//function to encode the message using caesar cypher
function encodeMessage(str , num)
{
    let result = "";
    //loop to go through each character
    for(let i=0; i <str.length; i++)
    {
        let char = str[i];
        if(char.match(/[a-z]/i)) //regex to check if the character is an alphabet
        {
            let key = str.charCodeAt(i);
            //code to encode uppercase letters 
            if(key >=65 && key <=90)
            {
                char = String.fromCharCode(((key - 65 + num) % 26) + 65);
            }
            //code to encode lowercase letters 
            else if(key >=97 && key <=122)
            {
                char = String.fromCharCode(((key - 97 + num) % 26) + 97);
            }
        }

        result += char;
    }
    return result;
}