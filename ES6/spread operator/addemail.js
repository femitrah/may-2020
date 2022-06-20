const employee = {
	name: 'ajay',
	age: 26,
	designation: 'software engineer',
	email: 'sr@gmail.com'
}
const employee1={
    email:  'sr@mitrahsoft.com'
}
const emp={...employee,...employee1}
console.log("line42",emp);