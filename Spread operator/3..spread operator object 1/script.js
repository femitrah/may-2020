const employee = {
	name: 'ajay',
	age: 26,
	designation: 'software engineer',
	email: 'sr@gmail.com'
};
const emailEmp={
  email:'sr@mitrahsoft.com'
}
const updatedEmail={...employee,...emailEmp}
console.log(updatedEmail)


    
    