import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <video controls="controls" width="480">
        <source src={this.props.source} type="video/mp4" />
      </video>
    );
  }

}

export default Player;
