import React from 'react';
import styles from './progress_bar.css';

const ProgressBar = (props) => {
  return (
    <input
      type="range"
      min="0"
      max={props.duration}
      step="1"
      value={props.position}
      onChange={(e) => props.onChange(e.target.value)}
      className={styles.progress_bar}
    />
  );
}

export default ProgressBar;
