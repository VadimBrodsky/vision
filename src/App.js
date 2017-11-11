import React from 'react';
import styles from './App.css';

import Player from './components/player';
import Controls from './components/controls';
import * as Media from './helpers/media_api';

const settings = {
  id: 'video1',
  source: 'sample.mp4',
};

/*
 * The media events that react supports:
 * ====================================
 * onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
 * onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
 * onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
 * onTimeUpdate onVolumeChange onWaiting
*/

class App extends React.Component {
  state = {
    position: 0,
    playing: false,
  };

  handleMetadata = e => {
    this.setState({
      duration: e.target.duration
    });
  };

  handleTimeUpdate = e => {
    this.setState({
      position: e.target.currentTime
    });
  };

  handlePlayClick = () => {
    Media.play(this.state.videoNode);
    this.setState({ playing: true });
  };

  handlePauseClick = () => {
    Media.pause(this.state.videoNode);
    this.setState({ playing: false });
  };

  handleSeek = (time) => {
    Media.seek(this.state.videoNode, time);
    this.setState({ position: time });
  };

  componentDidMount() {
    this.setState({
      videoNode: document.getElementById(settings.id),
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <h2>Vision Player</h2>
        <Player
          source={settings.source}
          id={settings.id}
          onMetadata={this.handleMetadata}
          onTime={this.handleTimeUpdate}
        />
        <Controls
          duration={this.state.duration}
          position={this.state.position}
          handlePlayClick={this.handlePlayClick}
          handlePauseClick={this.handlePauseClick}
          handleSeek={this.handleSeek}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default App;
