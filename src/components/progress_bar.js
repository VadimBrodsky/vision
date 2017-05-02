import React from 'react';

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
      />
    );
  }
}

export default ProgressBar;
