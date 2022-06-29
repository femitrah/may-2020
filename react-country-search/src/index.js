import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  //Strict mode checks are run in development mode only; they do not impact the production build.
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
