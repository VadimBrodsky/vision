import React from 'react';

import PlayButton from './play_button';
import StopButton from './Stop-Button';
import MuteButton from './Mute-Button';
import FullscreenButton from './Fullscreen-Button';
import VolumeSlider from './Volume-Slider';
import SeekBar from './Seek-Bar';
import ProgressBar from './Progress-Bar';
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
    <ul style={{
      display: 'flex',
      listStyle: 'none',
      padding: 0,
    }}>
      <li>
        <PlayButton onClick={handlePlayButtonClick} playing={playing} />{' '}
      </li>
      <li>
        <StopButton />
      </li>
      <li>
        <ProgressBar />
        <SeekBar
          handleSeek={handleSeek}
          duration={duration}
          position={position}
        />
        <TimeDisplay currentTime={position} totalTime={duration} />{' '}
      </li>
      <li>
        <MuteButton />
      </li>
      <li>
        <VolumeSlider />
      </li>
      <li>
        <FullscreenButton />
      </li>
    </ul>
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
