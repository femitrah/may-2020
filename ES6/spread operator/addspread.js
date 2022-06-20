const arr=[1,2,3,4,5];
const arr1=[1,2,3];
const arr2=[4,5];
const arr3=[...arr1,...arr2]

function value() {
    let sum=0;
    for(var i=0; i<arr3.length; i++){
    sum+=arr3[i]
    }
    return sum
    
}
console.log("line4",value(arr3));
