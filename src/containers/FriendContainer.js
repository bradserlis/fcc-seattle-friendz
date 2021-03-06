import React, { Component } from 'react';

import Friend from '../components/Friend';

class FriendContainer extends Component {
    state = {
      name:'',
      color:'lightblue',
      isFavorite: false,
      location:'',
      friendsList: []
    }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let friendObj = {
      name: this.state.name,
      color: this.state.color,
      isFavorite: this.state.isFavorite,
      location: this.state.location,
    }

    this.setState({
      friendsList: [...this.state.friendsList, friendObj]
    }, () => console.log('this is your friendsList state', this.state.friendsList))
  }

  renderFriends = () => {
    return this.state.friendsList.map((friend, i) => {
      return (
        <li key={i}>
          <Friend {...friend} />
        </li>
        )
    })
  }

  render(){
    return(
      <div className='friend-container'>
        <p className='subtle-text'>
          Friend Container
        </p>
        <div className='friend-container-form'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Friend Name
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Color
              <select
                name='color'
                value={this.state.color}
                onChange={this.handleChange}
              >
                <option value='lightblue'>Light Blue</option>
                <option value='lightgreen'>Light Green</option>
                <option value='salmon'>Salmon</option>
                <option value='lavender'>Lavender</option>
                <option value='lightpink'>Light Pink</option>
              </select>
             </label>
             <label>
               Favorite
               <input
                 name='isFavorite'
                 type='checkbox'
                 checked={this.state.isFavorite}
                 onChange={this.handleChange}
               />
             </label>
             <label>
               Location
               <input
                 type='text'
                 name='location'
                 value={this.state.location}
                 onChange={this.handleChange}
               />
             </label>
             <input className='submit' type='submit' />
            </form>
          </div>
        <div className='friends-list'>
          <ul>
            {this.renderFriends()}
          </ul>
        </div>
      </div>
    )
  }
}

export default FriendContainer;
