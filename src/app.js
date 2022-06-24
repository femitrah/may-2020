import { countries } from "./countryDetails";
// import "./index.css";
import { useState } from "react";

const Details = () => {
  const [search, setSearch] = useState("");
  const [searchterm, setCountry] = useState([]);
  const handleClick=()=>{
    console.log("hgjfytuf")
  }
  // function handleClick(){
  //   console.log("afg")
  // }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a country name..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {countries
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div className="user1">
                {val}
              </div>
            );
          }
        })
        .map((val) => {
          return (
            <div className="user"  onClick={handleClick}>
              <p>{val.name}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Details;
