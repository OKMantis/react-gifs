import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  // Whenever the initial state holds a value null
  // this render function will handle it with an if
  // statement.
  render() {
  if (!this.props.id) {
    return null;
  }


    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
