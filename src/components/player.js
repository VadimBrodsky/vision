import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <video controls="controls" width="480">
        <source src="sample.mp4" type="video/mp4" />
      </video>
    );
  }

}

export default Player;
