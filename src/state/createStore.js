import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState } from './localStorage';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const persistedState = loadState();

const createStore = () => reduxCreateStore(rootReducer, persistedState, enhancer);

export default createStore;
