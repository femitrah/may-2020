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

carInformation(car);                      
function carInformation(carNames){
  
const {manufacturer}=carNames;            
const {toyota,...hondaMaruthi}=manufacturer;   
const {Honda,Maruthi}=hondaMaruthi;           // console.log("honda and maruthi",Honda,Maruthi);
const [hondaInformation]=Honda;               // console.log("hondaInfo", hondaInformation)  ;
const [maruthiInformation]=Maruthi  ;         // console.log("marithiInfo",maruthiInformation); 
const {city}=hondaInformation;      

const{Ciaz}= maruthiInformation;          
console.log(`Honda Civic: ${city.color} ${city.bodyType}`);
console.log(`Maruthi Brezza : ${Ciaz.color} ${Ciaz.bodyType}`);
 
 

}