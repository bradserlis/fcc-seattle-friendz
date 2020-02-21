import React, { Component } from "react";

import "./style.css";
import Profile from "./components/Profile";
import FriendContainer from './containers/FriendContainer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Profile name='bradley' />
        <FriendContainer />
      </div>
    );
  }
}

export default App;

