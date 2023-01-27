/*Program to make own higher order function(HOF) that mimics the behaviour of a built-in method(filter method)*/

const wordsArray = ['Express', 'JavaScript', 'React', 'Next', 'CSS', 'Number', 'Little', 'People', 'System', 'Excuse', 'Eleven'];

// higher order function countLetters() takes a hypothetical function fn and an array arr
let myFilterFunction = arr => fn => {
    const arrayAfterMapping = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) { 
            arrayAfterMapping.push(' ' + arr[i]);
        }
    }
    return arrayAfterMapping; // Returning a new array
}

// we can now use the countLetters HOF with an anonymous function as one of the arguments (returning the words that are 6 letters long)
const outputArray = myFilterFunction(wordsArray)(item => (item.length > 5 && item.length < 7));

//we can now output it to the console
console.log('Words that are 6 letters long: ' + outputArray);