disappearString = (myString, toErase) => {
    // Place your code here
    let str = toErase.split("");
    let newString = myString;
    for(let i=0; i <str.length;i++)
    {
         newString = newString.replace(str[i], '');
    }
    return newString;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou"

let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
