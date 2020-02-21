import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className='profile'>
          <p className='subtle-text'>profile container</p>
        {this.props.name && <h3>Welcome {this.props.name}</h3>}
      </div>
    );
  }
}
