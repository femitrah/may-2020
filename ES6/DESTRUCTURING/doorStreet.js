const name=[
    { firstName: 'suresh' },
    'lname',
        23,
    {
        cityCode: 'KVP',
            location:   {
                            doorNumber: '1236',
                            streetName: 'gandhi gram'
                        }
    },
    'tamilnadu',
    'india',
    '628502'
]; 
// first name, doorNumber, streetName, pincode

let [a,b,c,d,e,f,g]=name;
let{location}=d;
let {doorNumber, streetName}=location



console.log("line 20","Name :",a.firstName,", door number : ",doorNumber,", Street name :",streetName,", Pincode :",g);