import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
