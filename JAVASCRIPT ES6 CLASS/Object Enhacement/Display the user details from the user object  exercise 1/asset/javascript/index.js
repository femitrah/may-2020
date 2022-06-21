//Display the user details from the user object using blow constant (id, name and designation) variables.
 const id = 'user_id';    
 const name = 'user_name';
 const designation = 'user_designation';
 const user = {
	user_id: '10001',
        user_name: 'kavin',
        user_age: 26,
        user_designation: 'developer',
        working_location: 'chennai'
        
}

console.log("Output",user['user_id'],user['user_name'],user['user_designation'],user[id])

