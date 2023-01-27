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
    console.log("You have already added 10 people to your guest list");
  }
}
console.log(array);
