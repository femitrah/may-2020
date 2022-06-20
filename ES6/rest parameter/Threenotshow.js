// function number({three,...args}){
//     return args

// }
// console.log("line 10",number({ one: 1, two: 2, three: 3, four: 4, five: 5 })); 

const value={ one: 1, two: 2, three: 3, four: 4, five: 5 };
current(value)

function current(value){
    const{three,...rest}=value;
    // const{...given}=rest;
    console.log("line",rest.one,rest.two,rest.four,rest.five);
}