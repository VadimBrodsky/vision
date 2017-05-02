import React from 'react';
import styles from './app.css';

import Player from './player';

const App = () => (
  <div className={styles.app}>
    <h2>Hello, World</h2>
    <Player />
  </div>
);

export default App;
