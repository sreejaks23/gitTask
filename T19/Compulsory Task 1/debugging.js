let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
   let key = keys[i];
   console.log(jsObject[key]); /*'k is not defined. changed 'k' to 'key' as it passes keys from the jsObject*/
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd\'oh!', /*added \' instead of ' */
  maggie: '(Pacifier Suck)',
}; 

let array =['lisa', 'bart', 'homer']; // created new array and passed values 

printValuesOf(simpsonsCatchphrases, array); //modified from 4 parameters to 2 parameter to get the possible output

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined