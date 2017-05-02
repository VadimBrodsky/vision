import React from 'react';
import styles from './app.css';

import Player from './player';
import Controls from './controls';

const settings = {
  id: 'video1',
  source: 'sample.mp4',
};

class App extends React.Component {
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
        <Controls playerId={settings.id} />
      </div>
    );
  }
}

export default App;
