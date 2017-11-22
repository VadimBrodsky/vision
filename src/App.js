import React from 'react';
import styles from './App.css';

import Player from './components/player';
import Controls from './components/controls';
import Source from './components/source';
import Media from './helpers/media_api';

const settings = {
  id: 'video1',
  source: 'sample.mp4',
};

class App extends React.Component {
  state = {
    duration: 0,
    playing: false,
    position: 0,
  };

  liftState = (state) => {
    this.setState(state);
  };

  componentDidMount() {
    this.setState({
      mediaApi: new Media(document.getElementById(settings.id)),
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <h2>Vision Player</h2>

        <Player
          id={settings.id}
          mediaApi={this.state.mediaApi}
          liftState={this.liftState}
          playing={this.state.playing}
        >
          <Source url={settings.source} />
        </Player>

        <Controls
          duration={this.state.duration}
          position={this.state.position}
          playing={this.state.playing}
          mediaApi={this.state.mediaApi}
          liftState={this.liftState}
        />

      </div>
    );
  }
}

export default App;
