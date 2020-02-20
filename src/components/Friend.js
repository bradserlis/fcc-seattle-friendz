import React, { Component } from "react";

export default class Friend extends Component {
  render() {
    return (
      <div className="friend-container">
        <h4>Friend Name: {this.props.name}</h4>
        <p> INFO </p>
      </div>
    );
  }
}
