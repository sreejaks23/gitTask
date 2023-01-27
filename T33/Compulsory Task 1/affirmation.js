/*Program to send words of affirmation using API call */

fetch("https://www.affirmations.dev/")
    .then(res => res.json()) //fetch data and convert into objects
    .then((result) => {
        console.log(result);
    }),
    (error) => { //executes error when fetch fails
        console.log(error);
    }