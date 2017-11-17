import React from 'react';

const ButtonPlay = ({ playing, onClick }) => {
  const label = playing ? 'Pause' : 'Play';
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonPlay;
