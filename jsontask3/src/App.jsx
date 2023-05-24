import { useState } from 'react';
import './App.css';
import data from './data'


function App() {
  const [checkboxs,setCheckboxs] =useState(data);
  const [update, setUpdate] = useState([])
  const [Color, setColor] = useState()

 const  UpdatePosition =(e)=>{
 const {value,checked} =e.target
let aa =data.map((element)=>{
  return element.country
})

let bb = aa.filter((elementOne)=>{
  console.log("elementOne",elementOne);
  console.log(checked);
  if (checked) {
    console.log("first",value);
    setUpdate(pre =>[...pre,value]);
    return true
  }
  else{
    console.log("else");

    return false
  }

})  
setUpdate(pre =>[...pre,value]);
console.log("update",update);
// console.log("aa",aa);
// console.log("bb",bb);
// console.log("value",checked,value)
 }
  
  // console.log( checkboxs);
  return (
    <>
      <div className="main">
        <h1>Json Exercise</h1>
        <div className="checkBoxs">
          <input type="checkbox" name="" id="" value="India" onChange={UpdatePosition}/>India
          <input type="checkbox" name="" id="" value="spain" onChange={UpdatePosition}/>Spain
          <input type="checkbox" name="" id="" value="Italy" onChange={UpdatePosition}/>Italy
          <input type="checkbox" name="" id="" value="south korea" onChange={UpdatePosition}/>South korea
          <input type="checkbox" name="" id="" value="russia" onChange={UpdatePosition}/>russia
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>weather</th>
              <th>Temprature</th>
            </tr>

            {data.map((dataValue) => {
              return (
                <tr >
                  <th>{dataValue.country}</th>
                  <td>{dataValue.cities.map((data) => <li> {(data.name)}</li>)}</td>
                  <td>{dataValue.cities.map((data) => (data.weather.map((y) => <li>{(y.description)}</li> )))}</td>
                  <td>{dataValue.cities.map((data) => <li className='temp'>{(data.main.temp )}</li>)}</td>
                </tr>

              )
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
