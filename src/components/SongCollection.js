import React, { Component } from 'react'
import Song from './Song'

class SongCollection extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let songs = this.props.playlistSongs.map((song)=>{

      let handleOnClick = ()=>{
        this.props.handleSongSelect(song.id)
      }

      let className
      if (song.id === this.props.selectedSongId) {
        className = "selected"
      }

      return (
        <Song
        key= {song.id}
        song={song}
        className={className}
        handleOnClick={handleOnClick}/>
      )
    })
    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

 export default SongCollection
