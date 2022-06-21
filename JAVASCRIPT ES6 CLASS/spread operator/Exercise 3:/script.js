const emailId={ 
    email: 'sr@mitrahsoft.com'
}
const employee = {
	name: 'ajay',
	age: 26,
	designation: 'software engineer',
	email: 'sr@gmail.com'
};

let userInformation={...employee,...emailId};
console.log("userInformation",userInformation);
