import React from 'react';
import Media from './media';

const Player = (props) => {
  return (
    <video
      width="480"
      id={props.id}
      onLoadedMetadata={props.onMetadata}
      onTimeUpdate={props.onTime}
    >
      <Media source={props.source} />
    </video>
  );
}

export default Player;
