import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    const { id } = this.props;
    // Don't call render if props.id didn't cahnced
    return nextProps.id !== id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media4.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} alt="gif" />
    );
  }
}

export default Gif;
