import React from 'react';

class Controls extends React.Component {
  state = {
    videoNode: '',
  };

  componentDidMount() {
    this.setState({
      videoNode: document.getElementById(this.props.playerId)
    });
  }

  handlePlayClick = () => {
    this.state.videoNode.play();
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePlayClick}>Play</button>
      </div>
    );
  }
}

export default Controls;
