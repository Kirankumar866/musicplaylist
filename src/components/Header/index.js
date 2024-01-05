import './index.css'
import {Component} from 'react'

class Header extends Component {
  state = {searchInput: ''}

  onChangingInput = e => {
    const {onRenderInput} = this.props
    this.setState({searchInput: e.target.value}, onRenderInput(e.target.value))
  }

  renderSearch = () => (
    <input
      type="search"
      placeholder="Search"
      className="inputElement"
      onChange={this.onChangingInput}
    />
  )

  render() {
    return (
      <div className="header">
        <h1>Songs Playlist</h1>
        {this.renderSearch()}
      </div>
    )
  }
}

export default Header
