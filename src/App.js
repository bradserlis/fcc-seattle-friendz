import React, { Component } from "react";

import "./style.scss";
import Friend from "./components/Friend";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Profile name='Michael Jordan' />
      </div>
    );
  }
}

export default App;

