const array={
  data: [
    {
      name: 'kamaraj',
      age: '23',
      native: 'KVP'
    },
    {
      name: 'KumarSTR',
      age: '45',
      native: 'TVL'
    },
    {
      name: 'Inbaraj',
      age: '32',
      native: 'MDU'
    }
  ]
};
let {data}=array;
let[a,b,c]=data;

console.log("array",a.name,b.name,c.name,a.age,b.age,c.age);
