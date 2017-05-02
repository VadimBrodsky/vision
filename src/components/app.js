import React from 'react';
import styles from './app.css';

import Player from './player';

const source = 'sample.mp4';

const App = () => (
  <div className={styles.app}>
    <h2>Hello, World</h2>
    <Player source={source} />
  </div>
);

export default App;
