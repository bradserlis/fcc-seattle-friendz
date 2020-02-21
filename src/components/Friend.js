import React, { Component } from "react";

export default class Friend extends Component {
  render() {
    return (
      <div className="friend-component">
        <div className="friend-header">
            <p className='subtle-text'>Friend Component</p>
        </div>
        <div className="friend-contact">
          <h4>{this.props.name} </h4>
        </div>
        <div className="skill-list" />
      </div>
    );
  }
}
