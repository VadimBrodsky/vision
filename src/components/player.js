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

class Player extends React.Component  {
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

  render() {
    return (
      <video
        width="480"
        id={this.props.id}
        ref={this.setVideoRef}
      >
        {this.props.children}
      </video>
    );
  }
};

const mapStateToProps = (state) => ({
  playing: state.media.playing,
});

export default connect(mapStateToProps)(Player);
