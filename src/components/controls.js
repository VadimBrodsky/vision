import React from 'react';
import PlayButton from './play_button';
import ProgressBar from './progress_bar';
import TimeDisplay from './time-display';

const Controls = ({ duration, playing, position, mediaApi, liftState }) => {
  const handlePlayButtonClick = () => {
    playing ? mediaApi.pause() : mediaApi.play();
    liftState({playing: !playing});
  };

  const handleSeek = (time) => {
    mediaApi.seek(time);
    liftState({ position: time });
  }

  return (
    <div>
      <PlayButton onClick={handlePlayButtonClick} playing={playing}/>
      <ProgressBar
        handleSeek={handleSeek}
        duration={duration}
        position={position}
      />
      <TimeDisplay
        currentTime={position}
        totalTime={duration}
      />
    </div>
  );
};

export default Controls;
