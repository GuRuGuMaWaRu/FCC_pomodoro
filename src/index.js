import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

/*
TO-DOs

1 - no sound on mobile!!
=== 2 - no long press on mobile!! ===
=== 3 - main buttons have blue selection highlighting!! ===
4 - data should be saved locally

*/
