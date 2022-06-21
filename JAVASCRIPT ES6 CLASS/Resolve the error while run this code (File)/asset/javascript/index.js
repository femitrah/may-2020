// slice method return selected element of the array
// for example: var array=["1","2","3","4","5","6","7","8","9"];
// array.slice(1,5);it will return 1 position and also 5th position in the array
var array=["apple","orange","Banana","mango"];

function getString(str, position) {
    return str.slice(0, position);
};
console.log("getString",getString(array,2));
