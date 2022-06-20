const student = {
    name: 'raja',
    age: 12,
    standard: 7,
    sports: 'football',
    rank: 8
};
const keys = [student['name'],student['age'],student['standard'],student['rank']];
const keys1=['name', 'age', 'standard', 'rank'];

for (var i = 0; i < keys.length; i++) {
   console.log("line11",`${keys1[i]}:${keys[i]}`); 
}
