import React from 'react';
import { connect } from 'react-redux';

/*
 * The media events that react supports:
 * ====================================
 * onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
 * onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
 * onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
 * onTimeUpdate onVolumeChange onWaiting
*/

class Player extends React.Component {
  // ({ id, liftState, mediaApi, children, playing }) =>
  // const handleMetadata = (e) => {
  //   liftState({ duration: e.target.duration });
  // };

  // const handleTimeUpdate = (e) => {
  //   liftState({ position: e.target.currentTime.toFixed() });
  // };

  // const handleClick = () => {
  //   playing ? mediaApi.pause() : mediaApi.play();
  //   liftState({ playing: !playing });
  // };
  //
  // onLoadedMetadata={handleMetadata}
  // onTimeUpdate={handleTimeUpdate}
  // onClick={handleClick}

  setVideoRef = (el) => {
    this.video = el;
  };

  componentDidUpdate(prevProps) {
    this.props.playing ? this.video.play() : this.video.pause();
  }

  componentDidMount() {
    const supportsVideo = !!document.createElement('video').canPlayType;
    const fullScreenEnabled = !!(
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.webkitSupportsFullscreen ||
      document.webkitFullscreenEnabled ||
      document.createElement('video').webkitRequestFullScreen
    );
    console.log({ supportsVideo, fullScreenEnabled });
  }

  paused() {
    console.log(this.video.paused);
  }

  ended() {
    console.log(this.video.ended);
  }

  stop() {
    this.video.pause();
    this.video.currentTime = 0;
  }

  mute() {
    this.video.muted = true;
  }

  unmute() {
    this.video.muted = false;
  }

  volume(newVol) {
    this.video.volume + newVol;
  }

  duration() {
    return this.video.duration;
  }

  loadMetadataHandler(data) {
    console.log(data);
  }

  timeUpdateHandler(time) {
    return this.video.currentTime;
  }

  isFullScreen() {
    return !!(
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.webkitSupportsFullscreen ||
      document.webkitFullscreenEnabled ||
      document.createElement('video').webkitRequestFullScreen
    );
  }

  goFullScreen() {
    if (this.isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      // setFullscreenData(false);
    } else {
      // if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      // else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
      // else if (videoContainer.webkitRequestFullScreen)
      //   videoContainer.webkitRequestFullScreen();
      // else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
      // setFullscreenData(true);
    }
  }

  render() {
    return (
      <video width="480" id={this.props.id} ref={this.setVideoRef}>
        {this.props.children}
      </video>
    );
  }
}

const mapStateToProps = (state) => ({
  playing: state.media.playing,
});

export default connect(mapStateToProps)(Player);
