const array=[
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
const [indexZero,indexOne,indexTwo,indeFour,indeFive,indeSix,indeSeven,indexEight]=array;  
const {location:locationOne}=indeFour; 







console.log(`FirstName: ${indexZero.firstName};
DoorNumber: ${locationOne.doorNumber} ;
StreetName: ${locationOne.streetName};
PinCode: ${indeSeven};`);