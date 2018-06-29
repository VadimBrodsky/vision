import React from 'react';
import PlayButton from './play_button';
import ProgressBar from './progress_bar';
import TimeDisplay from './time-display';

import { connect } from 'react-redux';
import { play, pause } from '../actions';

const Controls = ({ duration, playing, position, mediaApi, liftState, pause, play }) => {
  const handlePlayButtonClick = () => {
    playing ? pause() : play();
  };

  const handleSeek = (time) => {
    mediaApi.seek(time);
    liftState({ position: time });
  };

  return (
    <div>
      <PlayButton onClick={handlePlayButtonClick} playing={playing} />
      <ProgressBar handleSeek={handleSeek} duration={duration} position={position} />
      <TimeDisplay currentTime={position} totalTime={duration} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  playing: state.media.playing,
});

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
