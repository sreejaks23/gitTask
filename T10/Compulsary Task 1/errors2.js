// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion"; // reference error - missing 'double quotes'
let animal_type = "cub"; //misspelled variable name
let number_of_teeth = 16; //misspelled variable name
let numberOfLegs = "4";

/* syntax error (misspelling keyword and wrong string format) 
reference error number_of_teeth  and animal_type is not defined 
logical error - should be 'It is a ${animal_type} and it has ${number_of_teeth} teeth' instead of 'It is a ${number_of_teeth} and it has ${animal_type} teeth' */
let full_spec = `This is a ${animal}. It is a ${animal_type} and it has ${number_of_teeth} teeth` 

if (numberOfLegs = 3) 
{
        /*syntax error - missing paranthesis and
        reference error - 'full-spec' is not defined' */
        console.log(full_spec); 
}
