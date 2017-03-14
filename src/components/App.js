import React from 'react';
import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedSongId : props.data.selectedSongId,
      selectedPlaylistId :props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id){
    this.setState({selectedSongId: id})
  }

  handlePlaylistSelect(id){
    this.setState({
      selectedPlaylistId : id,
      selectedSongId : this.props.data.playlists[id-1].songs[0]
    })
  }

  render() {
    let data = this.props.data
    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;
    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="small-6 columns">
          <h1>Playlist</h1>
          <PlaylistCollection
          playlists={data.playlists}
          selectedPlaylistId={this.state.selectedPlaylistId}
          handlePlaylistSelect={this.handlePlaylistSelect}/>
        </div>
        <div className="small-6 columns">
          <h1>Song Collection</h1>
          <SongCollection
            playlistSongs={selectedPlaylistSongs}
            selectedSongId={this.state.selectedSongId}
            handleSongSelect={this.handleSongSelect}/>
        </div>
      </div>
    );
  }
}

export default App;
