import React from 'react';
import styles from './progress_bar.css';

const Seekbar = ({ duration, position, handleSeek }) => {
  return (
    <input
      type="range"
      min="0"
      max={duration}
      step="1"
      value={position}
      onChange={(e) => handleSeek(e.target.value)}
      className={styles.progress_bar}
    />
  );
}

export default Seekbar;
