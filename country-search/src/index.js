import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import SearchBar from "./searchBar";
import Data from "./data.json"
// import Test from'./App.test';
// import Details from './index';



ReactDOM.render(
    <React.StrictMode>
        {/* <App/> */}
        <SearchBar data={Data} placeholder="search here...."></SearchBar>
    </React.StrictMode>

,document.getElementById("root"))

// ReactDOM.render(<Style/>,document.getElementById("root"))


