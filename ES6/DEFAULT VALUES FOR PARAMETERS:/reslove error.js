var arr = [1, 2, 3, 4, 5];
function getString(str, position) {
    return str.slice(0, position)   
};
console.log('new string:', getString(arr, 3));

// getString(arr,3);
//slice() method returns selected elements in an array, as a new array.