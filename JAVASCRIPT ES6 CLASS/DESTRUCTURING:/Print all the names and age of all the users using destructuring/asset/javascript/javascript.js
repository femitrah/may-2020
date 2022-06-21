const object={ 
    data:[ {name: 'kamaraj',age: '23',native: 'KVP'}, 
           {name: 'KumarSTR',age: '45',native: 'TVL'},
           {name: 'Inbaraj',age: '32',native: 'MDU'} ]
};
const {data}=object; 
const [kamaraj,KumarSTR,Inbaraj]=data ;
console.log(`userName: ${kamaraj.name} ,userAge:${kamaraj.age}`);          
console.log(`userName: ${KumarSTR.name},userAge:${KumarSTR.age}`);
console.log(`userName: ${Inbaraj.name} ,userAge:${Inbaraj.age}`);