// I) function print() {
//     return any statement
//    }

//    II) function checkleap(params) {
//        return leap year function
//     }

//   III) function add(a,b) {
//        return add function 
//     }
//    IV) Include console log in the below arrow function. 
// concat=(firstString,secondString)=>firstString + secondString


let print=()=>console.log("New",anystatement)
print()

let checkleap=(params)=>console.log("line16",leapYear(params))

var a=10;
var b=9;
var c=a+b
let add=(a,b)=> c
console.log("line18",c)


let concat=(firstString,secondString) => {
    var sum=firstString + secondString
    console.log("line22",sum)
}

