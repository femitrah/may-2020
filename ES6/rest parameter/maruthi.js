const car = {
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
current(car)
function current(car) {
    const{manufacturer}=car;
    const{Honda,Maruthi}=manufacturer;
    const[a]=Honda;
    const[b]=Maruthi;
    const{civic,...city}=a;
    const{Brezza,...Ciaz}=b;

    console.log("line45",city.city,Ciaz.Ciaz);
}
// Desc: define a function. call the function with above object values as a parameter. get the honda and maruti details using restParameter and display the honda city and maruthi Ciaz details?
