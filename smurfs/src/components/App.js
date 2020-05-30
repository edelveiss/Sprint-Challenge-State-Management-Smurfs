import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo_container">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <h3>Welcome to your state management version of Smurfs!</h3>
        </div>
        <div className="form-list">
          <SmurfsList />
          <SmurfsForm />
        </div>
      </div>
    );
  }
}

export default App;
