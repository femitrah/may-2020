import React, { Component } from "react";
import { countries } from "./countryDetails";
import "./index.css";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      con: countries,
      search_index: "",
      searchterm: [],
    };
  }

  addCountry = (val, index) => {
    this.setState({ search_index: index });

    if (this.state.searchterm.length > 0) {
      this.setState({ searchterm: [...this.state.searchterm, val] });
    }

    this.setState({ searchterm: [...this.state.searchterm, val] });
    let filteredNative = this.state.con.filter((ab) => ab.code !== val.code);
    this.setState({ con: filteredNative });
  };
  onRemoveCountry = (val) => {
    let filteredCT = this.state.searchterm.filter((fd) => fd.code !== val.code);

    const resultedArray = [...this.state.con, val];
    console.log("ra", resultedArray);

    this.setState({ searchterm: filteredCT });
    let a = resultedArray.sort((a, b) => (a.name > b.name ? 1 : -1));

    this.setState({ con: a });
  };
  render() {
    return (
      <div>
        <h1> Country Details</h1>
        <div className="country-container">
          <div className="countryScroll">
            <input
              type="text"
              placeholder="Enter a country name..."
              onChange={(event) => {
                this.setState({ search: event.target.value });
              }}
            />
            {this.state.con
              .filter((val) => {
                if (this.state.search === "") {
                  return val;
                } else if (
                  val.name
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, index) => {
                return (
                  <div
                    className="user"
                    onClick={() => this.addCountry(val, index)}
                  >
                    <p>{val.name}</p>
                  </div>
                );
              })}
          </div>

          <div>
            <h1 className="selectedCountries">Selected Countries</h1>
            {this.state.searchterm.map((country, index) => (
              <p key={index} onClick={() => this.onRemoveCountry(country)}>
                {country.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Details;










