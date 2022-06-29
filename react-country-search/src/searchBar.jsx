import React, { Component } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Data from "./data.json";

class SearchBar extends Component {
  constructor() {
    
    super();
    this.state = {
      Data: Data,
      selectedCountry: [],
      searchText: "",
    };
  }

  handleSearch = (event) => {
    const newValue = event.target.value;
    this.setState({ searchText: newValue });
  };

  getData = (newValue) => {
    //to add value in selected countries array
    const selectedCountryArray = [...this.state.selectedCountry];
    const value = this.state.Data.find(
      (country) => country?.name === newValue.name
    );
    selectedCountryArray.push(value);
    this.setState({ selectedCountry: selectedCountryArray });

    //to delete value from options array
    const index = this.state.Data.findIndex(
      (country) => country.name === newValue.name
    );
    const countryArray = [...this.state.Data];
    countryArray.splice(index, 1);
    this.setState({ Data: countryArray });
  };
  handleDelete = (name) => {
    //to add deleted value to options popup
    const countryArray = [...this.state.Data];
    countryArray.push(
      this.state.selectedCountry.find((country) => country.name === name)
    );
    countryArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({ Data: countryArray });

    // to remove selected value from selected country array
    const selectedCountryArray = this.state.selectedCountry;
    const array = selectedCountryArray.filter(
      (country) => country.name !== name
    );
    this.setState({ selectedCountry: array });
  };
  render() {
    return (
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            className="search-input"
            onChange={this.handleSearch}
          />
          <div className="searchIcon">
            <SearchIcon></SearchIcon>
          </div>
          <div className="search-box">
            {this.state.Data.filter(
              (val) =>
                val.name
                  .toLowerCase()
                  .indexOf(this.state.searchText.toLowerCase()) > -1
            ).length > 0 ? (
              this.state.Data.filter(
                (val) =>
                  val.name
                    .toLowerCase()
                    .indexOf(this.state.searchText.toLowerCase()) > -1
              ).map((data) => (
                <p className="search-text" onClick={() => this.getData(data)}>
                  {data.name}
                </p>
              ))
            ) : (
              <p>Not Found ...</p>
            )}
          </div>
        </div>

        {this.state.selectedCountry && (
          <div className="countries">
            {this.state.selectedCountry.map((country) => (
              <div className="display">
                <p>{country?.name}</p>
                <DeleteIcon onClick={() => this.handleDelete(country?.name)} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
