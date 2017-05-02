import React from 'react';
import styles from './progress_bar.css';

class ProgressBar extends React.Component {
  state = { position: '0' };

  handlePositionChange = (e) => {
    const time = e.target.value;
    this.setState({ position: time });
    this.props.onChange(time);
  }

  render() {
    return (
      <input
        type="range"
        min="0"
        max={this.props.duration}
        step="1"
        value={this.state.position}
        onChange={this.handlePositionChange}
        className={styles.progress_bar}
      />
    );
  }
}

export default ProgressBar;
