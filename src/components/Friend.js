import React from "react";

const Friend = (props) => {
    return (
      <div 
        className="friend-component"
        style={{background: props.color}}
        >
        <div className="friend-header">
          {props.isFavorite && <h3> <span role='img'>🌟</span> </h3>}
          <p className='subtle-text'>Friend Component</p>
        </div>
        <div className="friend-contact">
          <h4>{props.name} </h4>
          {props.location && <h4>Location: {props.location} </h4>}
        </div>
        <div className="skill-list" />
      </div>
    );
}

export default Friend;
