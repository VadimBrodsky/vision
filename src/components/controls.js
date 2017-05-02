import React from 'react';
import ButtonPlay from './buttonPlay';

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
    this.mediaPlay(this.state.videoNode);
  };

  handlePauseClick = () => {
    this.mediaPause(this.state.videoNode);
  }

  mediaPlay = (media) => {
    console.log('EVENT: Play');
    media.play();
  };

  mediaPause = (media) => {
    console.log('EVENT: Pause');
    media.pause();
  };

  render() {
    return (
      <div>
        <ButtonPlay 
          onPlay={this.handlePlayClick}
          onPause={this.handlePauseClick}
        />
      </div>
    );
  };
}

export default Controls;
