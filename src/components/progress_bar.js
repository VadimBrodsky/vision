import React from 'react';
import styles from './progress_bar.css';

class ProgressBar extends React.Component {
  state = { position: '0' };

  handlePositionChange = (e) => {
    const time = e.target.value;
    this.props.onChange(time);
  }

  render() {
    return (
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        onChange={this.handlePositionChange}
        className={styles.progress_bar}
      />
    );
  }
}

export default ProgressBar;
