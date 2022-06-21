var arryNumberOne=[1,2,3,4,5];
var arraynumberTwo=[1,2,3,4,5];
var arraynumberThree=[...arryNumberOne,...arraynumberTwo];                                                  // console.log("arrayValues",arraynumberThree);

spread(arraynumberThree);

function spread(arrayValues){
var result=0;
for(i=0;i<arrayValues.length;i++){
 result=result+arrayValues[i];
}
console.log(`array values:${result}`);
}