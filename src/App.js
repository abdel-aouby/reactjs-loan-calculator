import React, { Component } from "react";
import "./styles.css";
import ResultContainer from "./components/result/container/resultContainer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultContainer />
      </div>
    );
  }
}

export default App;
