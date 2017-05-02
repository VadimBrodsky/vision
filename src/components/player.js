import React from 'react';
import Media from './media';

class Player extends React.Component {
  render() {
    return (
      <video width="480" id={this.props.id}>
        <Media source={this.props.source} />
      </video>
    );
  }
}

export default Player;
