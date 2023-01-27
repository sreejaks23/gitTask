/*Program for multiple choice question*/

let quiz;

do
{
    quiz = prompt("What colour is the sky? \n a. Purple \n b. Pink \n c. Blue \n d. Yellow \n Enter a, b, c, d:");
    //check if answer is correct and end the program
    if(quiz == "c")
    {
        console.log("That's correct!");
    }
    //if user answers incorrectly, try again else end the program
    if((quiz == "a") || (quiz == "b") || (quiz == "d"))
    {
        var try_again = prompt("That\'s incorrect! Would you like to try again? y/n:")
        if(try_again == "y")
        {
        try_again = true;
        }
        else
        {
            try_again = false;
        }
    }
    else
    {
        break;
    }
}
while((quiz == "a" || "b" || "d") && try_again)
    

