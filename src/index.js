import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import reducer from './reducers/index';
const middlewares = []; // redux-thunk for doing few async dispatches
middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger); // redux logger to see current state, action, new state in browser console in development mode
}
export const store = compose(applyMiddleware(...middlewares))(createStore)(
  reducer
);
// compose method takes multiple functions one after other and output of first will be given as i/p to second. And every function other than last should exactly return on value as output. last one can have multiple inputs.
// Here we want to apply all the moddlewares in list so this is syntax as per redux doc's

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
