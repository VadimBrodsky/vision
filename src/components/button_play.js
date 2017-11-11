import React from 'react';

const ButtonPlay = (props) => {
  const label = props.playing ? 'Pause' : 'Play';
  return (
    <button onClick={props.onClick}>
      {label}
    </button>
  );
}

export default ButtonPlay;
