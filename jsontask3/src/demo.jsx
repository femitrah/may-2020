import { useEffect, useState } from 'react';
import './App.css';
import data from './data'


function App() {
    const [stateData, setStateData] = useState([]);
    const [India, setIndia] = useState(true);
    const [spain, setSpain] = useState(true);
    const [italy, setItaly] = useState(true);
    const [korea, setkorea] = useState(true);
    const [russia, setRussia] = useState(true);

    let datademo = data.map((e) => (e.country))
    console.log("data", datademo);


    useEffect(() => {
let demo = data.filter((element)=>{
    return ((element.country === "India" && India ) || (element.country === "spain" && spain ) ||(element.country === "Italy" && italy ) ||(element.country === "south korea" &&  korea )|| (element.country === "russia" && russia ) )
})
setStateData(demo)

    }, [India, spain, korea, italy, russia])

    console.log("update", India, spain, italy, korea, russia);
    return (
        <>
            <div className="main">
                <h1>Json Exercise</h1>
                <div className="checkBoxs">
                    <input type="checkbox" name="" id="" checked={India} value="India" onChange={(element) => setIndia(element.target.checked)} />India
                    <input type="checkbox" name="" id="" checked={spain} value="spain" onChange={(element) => setSpain(element.target.checked)} />Spain
                    <input type="checkbox" name="" id="" checked={italy} value="Italy" onChange={(element) => setItaly(element.target.checked)} />Italy
                    <input type="checkbox" name="" id="" checked={korea} value="south korea" onChange={(element) => setkorea(element.target.checked)} />South korea
                    <input type="checkbox" name="" id="" checked={russia} value="russia" onChange={(element) => setRussia(element.target.checked)} />russia
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>weather</th>
                            <th>Temprature</th>
                        </tr>

                        {stateData
                            .map((dataValue) => {
                                return (
                                    <tr >
                                        <th>{dataValue.country}</th>
                                        <td>{dataValue.cities.map((data) => <li> {(data.name)}</li>)}</td>
                                        <td>{dataValue.cities.map((data) => (data.weather.map((y) =>

                                            <li>{(y.description)}</li>)))}</td>
                                        <td>{dataValue.cities.map((data) =>
                                            <li style={{ color: data.main.temp < 20 && data.main.temp > 10 ? "orange" : data.main.temp > 20 ? "red" : "blue" }}
                                                className='temp'>{(data.main.temp)}</li>)
                                        }

                                        </td>
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
