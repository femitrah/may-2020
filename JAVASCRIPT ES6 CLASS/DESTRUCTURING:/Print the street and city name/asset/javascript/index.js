const sampleData = {
  data: [
    {
      gender: 'Male',
      requestSource: 'Student',
      requestStatus: 'Pending',
      requestData: {
        educationInfo: [
          {
            userEmail: 'Doaulas@rrigg.com',
            qualification: 'College'
          }
        ],
        personalInfo: [
          {
            userFirstName: 'Doaul',
            userLastName: 'Doaulas',
            designation: 'Developer',
            location: {
              doorNumber: '2323',
              streetName: 'indra nager',
              city: 'kovilaptti'
            }
          }
        ]
      }
    },
    {
      gender: 'Female',
      requestSource: 'Student',
      requestStatus: 'Success',
      requestData: {
        educationInfo: [
          {
            userEmail: 'pooja@rrigg.com',
            qualification: 'College'
          }
        ],
        personalInfo: [
          {
            userFirstName: 'pooja',
            userLastName: 'kekar',
            designation: 'Tester',
            location: {
              doorNumber: '1236',
              streetName: 'gandhi gram',
              city: 'rajasthan'
            }
          }
        ]
      }
    }
  ]
}


const { data } = sampleData; 
const [firstArray,secondArray] = data;   

const {requestData}=firstArray ; 
const {requestData:requestDataTwo}=secondArray;                

const {personalInfo}=requestData ;                     
const {personalInfo:personalInfoTwo}=requestDataTwo;  

const [ userInfoOne ] = personalInfo;               
const { location:location1 } = userInfoOne;  
const [ userInfoTwo ] = personalInfoTwo
const {location:location2}=userInfoTwo                      
console.log(`StreetName:${location1.streetName},CityName:${location1.city}`);
console.log(`StreetName:${location2.streetName},CityName:${location2.city}`);



