let a={
    date: [
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

let{date}=a;
let[p,q,r]=date;

console.log(p.name,p.age,q.name,q.age,r.name,r.age)

