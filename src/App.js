import React from 'react';
import styles from './App.css';

import Player from './components/player';
import Controls from './components/controls';

const settings = {
  id: 'video1',
  source: 'sample.mp4',
};

class App extends React.Component {
  state = {};

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
      <div className={styles.app}>
        <h2>Hello, World</h2>
        <Player
          source={settings.source}
          id={settings.id}
          onMetadata={this.handleMetadata}
          onTime={this.handleTimeUpdate}
        />
        <Controls
          playerId={settings.id}
          duration={this.state.duration}
          position={this.state.position}
        />
      </div>
    );
  }
}

export default App;
