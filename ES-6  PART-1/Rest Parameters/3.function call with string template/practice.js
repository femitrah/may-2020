
 let car = {
  manufacturer: {
    toyota: [
      {
        vitz: {
          color: 'Blue',
          bodyType: 'Hatchback'
        },
        corolla: {
          color: 'Silver',
          bodyType: 'Sedan'
        }
      }
    ],
    Honda: [
      {
        civic: {
          color: 'White',
          bodyType: 'Hatchback'
        },
        city: {
          color: 'Black',
          bodyType: 'Sedan'
        }
      }
    ],
    Maruthi: [
      {
        Brezza: {
          color: 'White',
          bodyType: 'SUV'
        },
        Ciaz: { 
          color: 'Black',
          bodyType: 'Sedan'
        }
      }
    ]
  }
}; 
function rest(car){
  let{manufacturer:{toyota:toy,...remaining}}=car
  let{Honda:hon,Maruthi:mar}=remaining
 let[{civic:civ,city:cit}]=hon;
 let[{Brezza:bre,Ciaz:cia}]=mar;
 let{color:col1,bodyType:btype1}=cit
 let{color:col,bodyType:btype}=cia
  console.log(` Hondacolor:${col1},bodyType:${btype1}
 Maruthicolor:${col},bodyType:${btype}`)
}
rest(car)

