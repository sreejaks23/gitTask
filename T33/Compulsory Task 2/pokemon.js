/* Program to print details about Pokemon using api */

function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
        .then(res => res.json()) //fetch data and convert into objects
        .then((result) => {
            console.log('Name: \n' + result.name)
            console.log('\nWeight: \n' + result.weight)
            console.log('\nAbilities:')
            let abilities = result.abilities;
            for (let i in abilities) {
                console.log(abilities[i]);
            }
        }),
        (error) => { //executes error when fetch fails
            console.log(error);
        }
}

getPokemon();

console.log(`Population          :`);
console.log(`Elevation           :`);
console.log(`Weather Description : `);
