function rest({Name,age,address,city,...personalInfo}){
  let {personalInfo:[temp]} = personalInfo;
let{nickName:nick,email:ema}=temp
  console.log(nick,ema)  
}
rest( {
  Name: 'kumar',
  age: 25,
  address: 2317,
  city: 'kovilpatti',
  personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
}
)
