import React from 'react';
import styles from './app.css';

import Player from './player';
import Controls from './controls';

const settings = {
  id: 'video1',
  source: 'sample.mp4',
};

const App = () => (
  <div className={styles.app}>
    <h2>Hello, World</h2>
    <Player source={settings.source} id={settings.id} />
    <Controls playerId={settings.id} />
  </div>
);

export default App;
