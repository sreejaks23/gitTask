/* program to calculate distance, speed or time */

try //the try block
{
   let choice = prompt("Which one do you wish to calculate?\ndistance\ntime\nspeed");
   let distance,speed,time;

   if(!choice)
   {
      throw "User didn't select anything"
   }

   //condition to calculate the distance
   if(choice == "distance")
   {
      time =  prompt("Please enter the time:");
      speed = prompt("please enter the speed:");
      
      if(isNaN(time))
      {
            throw time + " is not a number";
      }
      if(isNaN(speed))
      {
            throw speed + " is not a number";
      }

      distance = time * speed;
      console.log(`Calculated distance is ${distance}`);
   }

   //condition to calculate the time
   if(choice == "time")
   {
      distance =  Number(prompt("Please enter the distance:"));
      speed = Number(prompt("please enter the speed:"));
      
      if(isNaN(distance))
      {
            throw distance + " is not a number";
      }
      if(isNaN(speed))
      {
            throw speed + " is not a number";
      }

      time = distance / speed;
      console.log(`Calculated time is ${time}`);
   }
   
   //condition to calculate the speed
   if(choice == "speed")
   {
      distance =  Number(prompt("Please enter the distance:"));
      time = Number(prompt("please enter the time:"));
      
      if(isNaN(distance))
      {
         throw distance + " is not a number";
      }      
      if(isNaN(time))
      {
            throw time + " is not a number";
      }   
      
      speed = distance / time;
      console.log(`calculated speed is ${speed}`);
   }
}
catch(err) //This block will be executed if and when the try block throws an error
{
   console.log(err);
}
// finally
// {
//    //This block will be executed whether the catch block was executed or not.
//    console.log("The program will continue from here. ");
// }