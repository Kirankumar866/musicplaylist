import './index.css'
import {Component} from 'react'
import {MdDelete} from 'react-icons/md'
import Header from '../Header'

class PlayList extends Component {
  constructor(props) {
    super(props)
    this.state = {initialPlayList: props.trackList}
  }

  onRenderInput = value => {
    console.log(value)
    const {trackList} = this.props
    this.setState(prev => ({
      initialPlayList:
        value.length > 0
          ? prev.initialPlayList.filter(eachSong =>
              eachSong.name.toLowerCase().includes(value.toLowerCase()),
            )
          : trackList,
    }))
  }

  deleteSong = id => {
    this.setState(prev => ({
      initialPlayList: prev.initialPlayList.filter(
        eachSong => eachSong.id !== id,
      ),
    }))
  }

  renderingplaylist = eachSong => {
    const {id, imageUrl, name, genre, duration} = eachSong

    return (
      <li key={id} className="eachSongContainer">
        <div className="thumbnailContainer">
          <img src={imageUrl} alt="track" className="songThumbnail" />
          <div className="songdetails">
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>
        <div className="rightContainer">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="deletebtn"
            aria-label="Delete Item"
            data-testid="delete"
            onClick={() => this.deleteSong(id)}
          >
            <MdDelete width="30px" height="30px" />
          </button>
        </div>
      </li>
    )
  }

  render() {
    const {initialPlayList} = this.state
    console.log(initialPlayList)

    return (
      <div className="playlistContainer">
        <Header onRenderInput={this.onRenderInput} />
        {initialPlayList.length > 0 ? (
          <ul className="bodyContainer">
            {initialPlayList.map(eachSong => this.renderingplaylist(eachSong))}
          </ul>
        ) : (
          <div className="not-found">
            <p>No Songs Found</p>
          </div>
        )}
      </div>
    )
  }
}

export default PlayList
