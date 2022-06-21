// const userTwo={
//     marks: [67, 34, 54,72,56], 
//     grade: "II"    
// }
// const user = {
// 	name: 'karthick',
// 	age: 12,
//     standard: 7
// };
// const twoObjects={...userTwo,...user};
// console.log(twoObjects);
//------------------------------------------------------------Loops----------------------------------------------------------------------------------------- 
/* For each Loop: it can only loop did not return any values 
                  then for each loop have three type of values for example ForEach(arrayvalues,arraryIndex,totalValues
                  the arrayValues it will have the arrayValues,
                  the arrayIndex it will show the position of the array
                  the totalValues it will show the array*/
                  
// const array=[1,2,3,4,5,6,7,8,9,10];
// array.forEach(myfunction);
// function myfunction(arrayValues,arrayIndex,totalValues){
//     console.log("ForeachValues",arrayValues,arrayIndex,totalValues)
// }
/*Map Loop:it can loop and also return the values and boolean values.
                  the map loop return the boolean values while the argument have the condition
                  it's used to create an new array by return the values 
                  the map does not execute the function while the array have without values*/
const array=[1,2,3,4,5,6,7,8,9,10];
 var mapLoop=array.map((myFunction)=>{
     return myFunction>2});
//  function myFunction(arrayValues){
//   if(arrayValues>2){
//     return arrayValues+1;

//   }
//      }
console.log("MapLoop",mapLoop)
