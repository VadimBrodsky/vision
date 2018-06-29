import React from 'react';

const PlayButton = ({ playing, onClick }) => {
  const label = playing ? 'Pause' : 'Play';

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default PlayButton;
