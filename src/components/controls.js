import React from 'react';
import ButtonPlay from './button_play';
import ProgressBar from './progress_bar';
import * as Media from '../helpers/media_api';

class Controls extends React.Component {
  state = {
    videoNode: '',
  };

  componentDidMount() {
    const el = document.getElementById(this.props.playerId);
    this.setState({
      videoNode: el,
    });
  };

  handlePlayClick = () => {
    Media.play(this.state.videoNode);
    this.playbackInterval = this.setPositionInterval();
  };

  handlePauseClick = () => {
    Media.pause(this.state.videoNode);
    this.clearPositionInverval(this.playbackInterval);
  }

  handleSeek = (timer) => {
    console.log(timer);
    Media.currentTime(this.state.videoNode, timer)
  }

  setPositionInterval = () => {
    return setInterval(() => {
      const time = Media.currentTime(this.state.videoNode)
      console.log(time);
    }, 50);
  }

  clearPositionInverval = (inervalId) => {
    clearInterval(this.playbackInterval);
  }

  render() {
    return (
      <div>
        <ButtonPlay
          onPlay={this.handlePlayClick}
          onPause={this.handlePauseClick}
        />
        <ProgressBar onChange={this.handleSeek} />
      </div>
    );
  };
}

export default Controls;
