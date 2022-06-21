const object={
    data: [
        {
            name: 'Ajay',
            personal: { age: '25', native: 'nellai', education: { rank: '2', grade: 'B' }, interest: { hobby: 'book reading' } }
        },
        {
            name: 'vicky',
            personal: { age: '26', native: 'chennai', education: { rank: '3', grade: 'D'}, interest: { hobby: 'playing'} }
        },
        {
            name: 'muthu',
            personal: { age: '35', native: 'madurai', education: { rank: '5', grade: 'F'}, interest: { hobby: 'writing'} } 
          }]
};

const {data}=object;                                                                                                     
const [userOne,userTwo,userThree]=data;   
                                                         
const {personal}=userOne;                       
const {education}=personal;                     

const {personal:personalTwo}=userTwo;            
const {education:educationTwo}=personalTwo;       

const {personal:personalThree}=userThree;            
const {education:educationThree}=personalThree ;         
 console.log(`StudentName: ${userOne.name} Rang:${education.rank} Grade:${education.grade}: 
 StudentName:${userTwo.name} Rang:${educationTwo.rank} Grade:${educationTwo.grade}: 
 StudentName:${userThree.name} Rang:${educationThree.rank}Grade:${educationThree.grade}`);
