let c={
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
};
let {data:[d1,d2]} = c;

let {requestData:{personalInfo:[{location:{streetName:street,city:city1}}]}}=d1
let {requestData:{personalInfo:[{location:{streetName:street1,city:city2}}]}}=d2

console.log(street,city1)
console.log(street1,city2)