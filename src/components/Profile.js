import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile-container'>
        <div className='subtle-text-container'>
          <p>profile container</p>
        </div>
        {this.props.name && <h3>Welcome {this.props.name}</h3>}
      </div>
    );
  }
}
