import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Uuid from "./Components/Uuid";
import NewDate from "./Components/Date";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h5>Generator (uuid & dates): Copy's to Clipboard</h5>
      </div>
      <div className="forms">
        <br />
        <Uuid title={"UUID"} />
        <br />
        <NewDate title={"Date"} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
