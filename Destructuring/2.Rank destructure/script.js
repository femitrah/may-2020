let b={
  data: [
      {
        name: 'Ajay',
        personal: {
          age: '25',
          native: 'nellai',
          education: {
            rank: '2',
            grade: 'B'
          },
          interest: {
            hobby: 'book reading'
          }
        }
      },
      {
        name: 'vicky',
        personal: {
          age: '26',
          native: 'chennai',
          education: {
            rank: '3',
            grade: 'D'
          },
          interest: {
            hobby: 'playing'
          }
        }
      },
      {
        name: 'muthu',
        personal: {
          age: '35',
          native: 'madurai',
          education: {
            rank: '5',
            grade: 'F'
          },
          interest: {
            hobby: 'writing'
          }
        }
      }
    ]
  };

  let {data:[d1,d2,d3]} = b;

  
  let {personal:{education:{rank:ra,grade:grad}}}=d1
  let {personal:{education:{rank:ran,grade:gra}}}=d2
  let {personal:{education:{rank:ran1,grade:grade1}}}=d3
  console.log("Ajay",ra,grad)
  console.log("vicky",ran,gra)
  console.log("muthu",ran1,grade1)


