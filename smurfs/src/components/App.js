import React from "react";
import "./App.css";

import SmurfState from "./SmurfState";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfState />
    </div>
  );
};

export default App;
