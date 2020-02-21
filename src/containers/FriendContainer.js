import React, { Component } from 'react';

import Friend from '../components/Friend';

class FriendContainer extends Component {

  render(){
    return(
      <div className='friend-container'>
        <p className='subtle-text'>
          Friend Container
        </p>
        <div className='friends-list'>
          <Friend name='number 1' />
          <Friend name='number 2' />
        </div>
      </div>
      )
  }
}

export default FriendContainer;
