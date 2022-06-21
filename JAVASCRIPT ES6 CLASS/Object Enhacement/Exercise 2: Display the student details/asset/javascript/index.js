// Display the details: student details using loop the keys array.
const student = {
    name: 'raja',
    age: 12,
    standard: 7,
    sports: 'football',
    rank: 8
};
const keys = [student['name'],student ['age'],student['standard'],student['sports'], student['rank']];
let result="";
for(i=0; i<keys.length;i++){
 result=result+keys[i]
}

console.log("result",result);