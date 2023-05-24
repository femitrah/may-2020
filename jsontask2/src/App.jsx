import { useState } from 'react';
import './App.css';
import data from './data'

function App() {

  // const [first, setfirst] = useState(false)
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("Desc");
  const [dataFirst,setData] = useState(data);
  // const [selected, setSelected] = useState('Desc');
  

//   // console.log("number", number);
//    const upDate=(e =e.target.value)=>{
//     let element = e.target.value
//     // console.log("element",element);
//     setValue(element)

//     let dataValue = dataFirst.sort((a,b)=> value === "Desc" ? a.population-b.population : b.population - a.population )
// // console.log("dataValue",element);
// // setSelected(element)
//     setData(dataValue)
//    }
   
console.log("value",value);
  return (
    <>

      <div className="main">
        <h1>Country JSON</h1>
        <div className="radio">
          <input type="radio" name="value" id=""  value="Asc"  onChange={(e) => setValue( e.target.value)} />Asc
          <input type="radio" name="value" id="" checked={value == "Desc"} value="Desc" onChange={(e) => setValue( e.target.value)}/>Desc
        </div>
        <div className="search">
          <label htmlFor="">Search</label>
          <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())} />
        </div>
        <div className="table">
          <table>
            <tr>
              <th>{"Country"}</th>
              <th>{"Capital City"}</th>
              <th>{"languages"}</th>
              <th>{"Population"}</th>
              <th>{"Countinents"}</th>
              <th>{"Region"}</th>
              <th>{"Sub Region"}</th>
            </tr>
            {dataFirst.sort((a,b)=> value === "Desc" ? b.population-a.population : a.population-b.population  )
          
            .filter((item) => {
              console.log("item.name.common.toLocaleLowerCase().includes(search)",item.name.common.toLocaleLowerCase().includes(search));
              return search === "" ? item : item.name.common.toLocaleLowerCase().includes(search)
            })
              .map((countryData) => {
                return (
                  <tr key={countryData.population}>
                    <td>{countryData.name.common}</td>
                    <td>{countryData.capital}</td>
                    <td>{countryData.languages}</td>
                    <td>{countryData.population}</td>
                    <td>{countryData.continents}</td>
                    <td>{countryData.region}</td>
                    <td>{countryData.subregion}</td>
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
