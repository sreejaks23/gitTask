separationString = (myString) => {
    // Place your code here
    let str = myString.split(" ");
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i] + "\n";
    }
    let result = (str.join("").trim());
    return result;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings.forEach((sentence) => {
    let sep = separationString(sentence);
    console.log(sep);
    console.log("------------------------------------------------")

});
