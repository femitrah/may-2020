const user = {
	name: 'karthick',
	age: 12,
    standard: 7
}
const user1 = {
    name: 'karthick',
	age: 12,
    standard: 7,
    grade: 'II',
    marks:[67, 34, 54,72,56]    
}
const user2={...user,...user1}
console.log("line4",user2);