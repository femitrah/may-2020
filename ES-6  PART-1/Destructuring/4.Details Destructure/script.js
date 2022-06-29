let a=[
  { firstName: 'suresh' },
  'lname',
  23,
  {
    cityCode: 'KVP',
    location: {
      doorNumber: '1236',
      streetName: 'gandhi gram'
    }
  },
  'tamilnadu',
  'india',
  '628502'
]; 

let[a1,,a3,a4,,,a7]=a;
console.log(a1.firstName,a3,a4.location.streetName,a7)

