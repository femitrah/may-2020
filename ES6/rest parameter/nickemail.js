//   Desc: define a function. call the function with above object values as a parameter. show the result.

const value={
    Name: 'kumar',
    age: 25,
    address: 2317,
    city: 'kovilpatti',
    personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
  };
current(value)
function current(value) {
    const{personalInfo}=value;
    const[a]=personalInfo;
    const{phone,...rest}=a;
    console.log("line13",rest.nickName,rest.email)
}

