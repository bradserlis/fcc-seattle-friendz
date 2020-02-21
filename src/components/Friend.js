import React, { Component } from "react";

export default class Friend extends Component {
  render() {
    return (
      <div 
        className="friend-component"
        style={{background: this.props.color}}
        >
        <div className="friend-header">
          {this.props.isFavorite && <h3> 🌟 </h3>}
          <p className='subtle-text'>Friend Component</p>
        </div>
        <div className="friend-contact">
          <h4>{this.props.name} </h4>
          {this.props.location && <h4>Location: {this.props.location} </h4>}
        </div>
        <div className="skill-list" />
      </div>
    );
  }
}
