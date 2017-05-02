import React from 'react';

class ButtonPlay extends React.Component {
  state = {
    playing: false
  };

  handlePlayClick = () => {
    if (this.state.playing) {
      this.setState({ playing: false });
      this.props.onPause();
    } else {
      this.setState({ playing: true });
      this.props.onPlay();
    }
  }

  render() {
    const label = this.state.playing ? 'Pause' : 'Play';

    return (
      <button onClick={this.handlePlayClick}>
        {label}
      </button>
    );
  }
}

export default ButtonPlay;
