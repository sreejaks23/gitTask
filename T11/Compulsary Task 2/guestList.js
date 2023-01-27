/*Program to list down guest names to invite for a dinner party*/

let array = [];

for(i=0;i<=10;i++)
{
  let guest_List = prompt("Enter the names of people you would like to invite for dinner");
  if(i<10)
  {
  array.push(guest_List);
  }
  else
  {
    let input = prompt("You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n: ");
    if(input == "y")
    {
      console.log(array);
      let replace = prompt("Who would you like to replace?");
      let x = array.indexOf(replace); // created temporary variable to replace an element in array list
      array.splice(x,1,guest_List);
    }
  }
}
console.log(array);
