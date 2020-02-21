import React, { Component } from "react";

import "./style.css";
import Friend from "./components/Friend";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Profile name='Bradley' />
      </div>
    );
  }
}

export default App;

