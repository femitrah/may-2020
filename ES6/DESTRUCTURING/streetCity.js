const value={
    data:[
             {
               gender: 'Male',
               requestSource: 'Student',
               requestStatus: 'Pending',
               requestData:  {
                                 educationInfo:  [
                                                     {
                                                       userEmail: 'Doaulas@rrigg.com',
                                                       qualification: 'College'
                                                     }
                                                 ],
                                 personalInfo:   [
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
                                 personalInfo:   [
                                                     {
                                                         userFirstName: 'pooja',
                                                         userLastName: 'kekar',
                                                         designation: 'Tester',
                                                         location:   {
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

let {data} = value;
let[a,b]=data;

let{requestData}=a;
let{requestData:reqOne}=b;

let{personalInfo}=requestData;
let{personalInfo:perOne}=reqOne;

let[p]= personalInfo;
let[q]=perOne;

let{location}=p;
let{location:spot}=q;

// console.log("line 72",location);
console.log("line 73","Doaul streetname :",spot.streetName,", city :",spot.city,", pooja streetname :",location.streetName,", city :",location.city,".")
    
    