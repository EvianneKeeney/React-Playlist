import React from 'react'

class Song extends React.Component {
  constructor (props){
    super(props);
  }
  render(){
    return(
      <li className = {this.props.className}
        onClick={this.props.handleOnClick}>
        {this.props.song.name} - {this.props.song.artist}
      </li>
    )
  }
}

export default Song
