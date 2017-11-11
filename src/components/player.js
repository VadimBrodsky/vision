import React from 'react';
import Media from './media';

const Player = ({ id, onMetadata, onTime, source }) => {
  return (
    <video
      width="480"
      id={id}
      onLoadedMetadata={onMetadata}
      onTimeUpdate={onTime}
    >
      <Media source={source} />
    </video>
  );
}

export default Player;
