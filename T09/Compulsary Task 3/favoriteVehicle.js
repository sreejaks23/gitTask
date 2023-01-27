/* Program to display favouriteVehicle */

let cars =["FORD", "SEAT", "BMW", "AUDI", "SKODA"];

let fav_Vehicle = "SEAT";

for(i=0; i <cars.length; i++)
{
    //console.log(`I would love to drive a ${cars[i]}`);
    if(cars[i]== fav_Vehicle)
    {
        console.log(`The ${cars[i]} is my favourite vehicle`);
    }
    else
    {
        console.log(`The ${cars[i]} is not my favourite vehicle`);
    }
}
