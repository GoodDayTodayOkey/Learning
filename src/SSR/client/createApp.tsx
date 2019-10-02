import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from '../../App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { updateStore } from '../../Lessons/React/17.SSR/reducers';
import { IReduxStore } from 'Lessons/React/17.SSR/types';

declare global {
  interface Window { __PRELOADED_STATE__: IReduxStore; }
}

const composeEnhancers = composeWithDevTools({});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(updateStore, preloadedState, composeEnhancers(applyMiddleware()));

ReactDom.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
