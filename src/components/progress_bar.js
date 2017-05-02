import React from 'react';

class ProgressBar extends React.Component {
  state = { position: '0' };
  render() {
    return (
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={this.state.position}
      />
    );
  }
}

export default ProgressBar;
