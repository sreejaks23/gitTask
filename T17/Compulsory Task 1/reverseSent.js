/* program to reverse a sentence using recursion */

function reverseSent(sentence,index)
{
    if(sentence == "")
    {
        return "";
    }
    else
    {
        return reverseSent(sentence.substr(1)) + sentence.charAt(index);
    }
}

console.log(reverseSent("Welcome to recursion",0));