import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

export default function configureStore() {
  return createStore(
    reducers,
    {
      media: {
        playing: false,
      }
    },
    applyMiddleware(logger)
  );
}
