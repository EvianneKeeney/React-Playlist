import React from 'react'
import Playlist from './Playlist.js'

class PlaylistCollection extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let playlists = this.props.playlists.map((playlist)=>{

      let handleOnClick = () =>{
        this.props.handlePlaylistSelect(playlist.id)
      }

      let className
      if (playlist.id === this.props.selectedPlaylistId) {
        className = "selected"
      }

      return (
        <Playlist
        key={playlist.id}
        playlist={playlist}
        className={className}
        handleOnClick={handleOnClick}/>
      );
    });

    return(
      <ul>
        {playlists}
      </ul>
    );
  }
}

export default PlaylistCollection
