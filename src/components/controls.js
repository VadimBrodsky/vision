import React from 'react';
import ButtonPlay from './button_play';
import ProgressBar from './progress_bar';

const Controls = ({
  duration,
  handlePlayClick,
  handlePauseClick,
  handleSeek,
  playing,
  position,
}) => {
  const playButton = <ButtonPlay onClick={handlePlayClick} playing={false} />;
  const pauseButton = <ButtonPlay onClick={handlePauseClick} playing={true} />;
  return (
    <div>
      { playing ? pauseButton : playButton }
      <ProgressBar
        handleSeek={handleSeek}
        duration={duration}
        position={position}
      />
    </div>
  );
};

export default Controls;
