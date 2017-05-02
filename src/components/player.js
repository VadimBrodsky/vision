import React from 'react';
import Media from './media';

class Player extends React.Component {
  handleMetadata = e => {
    this.setState({
      duration: e.target.duration
    });
  };

  handleTimeUpdate = e => {
    this.setState({
      position: e.target.currentTime
    });
  };

  render() {
    return (
      <video width="480" id={this.props.id} onLoadedMetadata={this.handleMetadata} onTimeUpdate={this.handleTimeUpdate}>
        <Media source={this.props.source} />
      </video>
    );
  };
}

export default Player;
