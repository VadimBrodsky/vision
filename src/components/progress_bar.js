import React from 'react';
import styles from './progress_bar.css';

const ProgressBar = ({ duration, position, onChange }) => {
  return (
    <input
      type="range"
      min="0"
      max={duration}
      step="1"
      value={position}
      onChange={(e) => onChange(e.target.value)}
      className={styles.progress_bar}
    />
  );
}

export default ProgressBar;
