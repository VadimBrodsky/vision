import React from 'react';
import ButtonPlay from './button_play';
import ProgressBar from './progress_bar';
import * as Media from '../helpers/media_api';

class Controls extends React.Component {
  state = {};

  handlePlayClick = () => {
    Media.play(this.state.videoNode);
    this.setState({ playing: true });
    // this.playbackInterval = this.setPositionInterval();
  };

  handlePauseClick = () => {
    Media.pause(this.state.videoNode);
    this.setState({ playing: false });
    // this.clearPositionInverval(this.playbackInterval);
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

  componentDidMount() {
    const el = document.getElementById(this.props.playerId);
    this.setState({
      videoNode: el,
      playing: false,
    });
  };

  render() {
    const playButton = <ButtonPlay onClick={this.handlePlayClick} playing={false} />;
    const pauseButton = <ButtonPlay onClick={this.handlePauseClick} playing={true} />;
    return (
      <div>
        { this.state.playing ? pauseButton : playButton }
        <ProgressBar
          onChange={this.handleSeek}
          duration={this.props.duration}
          position={this.props.position}
        />
      </div>
    );
  };
}

export default Controls;
