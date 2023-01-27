//This program identifies the shape of quadrilaterals
/*The user inputs the length of each sides and angles of each corner and determines whether the shape is a square,
a rectangle, a rhombus or a parallelogram*/

SideLen_one = prompt("Enter the length of the first side:");
SideLen_two = prompt("Enter the length of the second side:");
SideLen_three = prompt("Enter the length of the third side:");
SideLen_four = prompt("Enter the length of the fourth side:");

angle_one = prompt("Enter the measurement of angle one");
angle_two = prompt("Enter the measurement of angle two");
angle_three = prompt("Enter the measurement of angle three");
angle_four = prompt("Enter the measurement of angle four");


if ((angle_one == angle_two)&&(SideLen_one == SideLen_four && SideLen_two == SideLen_four && SideLen_three == SideLen_four))
 {
    console.log("The shape is Square");
 } 
 else if ((angle_one == angle_two)&& (SideLen_one == SideLen_three || SideLen_two == SideLen_four)) 
 {
    console.log("The shape is a Rectangle");
 } 
 else if (((angle_one == angle_three) &&(angle_two == angle_four) && (angle_one < 90 && angle_four > 90)) && (SideLen_one == SideLen_four && SideLen_two == SideLen_four && SideLen_three == SideLen_four)) 
 {
    console.log("The shape is a Rhombus");
 } 
 else if (((angle_one == angle_three) &&(angle_two == angle_four) && (angle_one < 90 && angle_four > 90)) && (angle_one < 90 || angle_two < 90) && (SideLen_one == SideLen_three || SideLen_two == SideLen_four)) 
 {  
    console.log("The shape is a Parallelogram");
 } 
 else console.log("The shape doesn't exist");