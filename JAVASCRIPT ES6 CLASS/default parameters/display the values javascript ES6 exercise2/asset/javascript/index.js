// 1) Display the Value
// Desc: Define a function to add two numbers and console that value. get those two numbers from parameters and set default parameters to that. call that function with three types.
// 1) with two arguments
// 2) with a argument
// 3) with no arguments 
function display(firstValue=10,secondValue=20){
return firstValue+secondValue;    
}
console.log(" with two arguments",display(25,20));
console.log("with a argument",display(12));
console.log(" with no arguments",display());