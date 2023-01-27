/*Program to find city information using api fetch */

const fetch = require('isomorphic-fetch');

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60';

const weather_url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-74&lat=40.7';

//api to get population and elevation of a city
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'acf02c81a2msh706d695fc75792bp1b4a9djsn356fbb850572',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

//api to get current weather of a city
const weather_options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'acf02c81a2msh706d695fc75792bp1b4a9djsn356fbb850572',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

//returns city population and elevation using fetch
fetch(url, options)
	.then(res => res.json())
	.then((result) => {
   // console.log(JSON.stringify(result));
     console.log("City Information\n---------------------------------")
     console.log(`Population          :` +JSON.stringify(result.data.population));
     console.log(`Elevation           :` +JSON.stringify(result.data.elevationMeters));
}),
(error) => { //executes error when fetch fails
    console.log(error);
}

//returns weather information of a city using fetch
fetch(weather_url, weather_options)
	.then(res => res.json())
	.then((result) => {
    //console.log(JSON.stringify(result));
    let description = JSON.stringify(result.data[0].weather.description);
    console.log(`Weather Description : ` +description.slice(1,13));
}),
(error) => { //executes error when fetch fails
    console.log(error);
}
