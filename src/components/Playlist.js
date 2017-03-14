import React, { Component } from 'react';

class Playlist extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className = {this.props.className}
        onClick={this.props.handleOnClick}>
        {this.props.playlist.name}
      </li>
    );
  }
}

export default Playlist;
