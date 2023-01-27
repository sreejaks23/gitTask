/*program to create multiplication application using closures */

//outer function(outer variable)
function multiply(a) {
    //inner function(inner variable)
    return function (b){
       for(i=0;i<=a;i++)
       {
            console.log(`${a} * ${b[i]} =  ${a * b[i]}`);
       }
    }
}

const array = [0,1,2,3,4,5,6,7,8,9,10];
let mc1 = multiply(10);
mc1(array);

