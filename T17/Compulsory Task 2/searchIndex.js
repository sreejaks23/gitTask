/* program to seach for a word in an array using recursion */

let array = ["java", "html", "javascripts", "css"];

//function to search a word in an array
function searchIndex(array, item, i = 0) 
{
   if (i >= array.length) //Base case. If index is greater than array length return -1
   {
      return -1;
   }
   if (array[i] === item) //Base case. If index of array is equal to the seach word return the index of an array
   {
       return i;
   }
   return searchIndex(array, item, i + 1); //Recursion call to the function working towards the base case
}

console.log(searchIndex(array, "css"));