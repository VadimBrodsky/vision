import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

export default function configureStore() {
  return createStore(
    reducers,
    {
      media: {
        playing: false,
        duration: 0,
        currentTime: 0,
      }
    },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(logger)
  );
}
