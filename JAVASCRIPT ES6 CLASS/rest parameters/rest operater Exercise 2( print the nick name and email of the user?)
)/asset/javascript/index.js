// Desc: define a function. call the function with above object values as a parameter. show the result.

const object={
    Name: 'kumar',
    age: 25,
    address: 2317,
    city: 'kovilpatti',
    personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
    
  };
  restPrameter(object);   

  function restPrameter(objcetValues){

  const{personalInfo}=objcetValues;  

  const [userInfo]=personalInfo; 

  const{phone,...restVales}=userInfo; 

  console.log(`${restVales.nickName};${restVales.email}`)    

  }