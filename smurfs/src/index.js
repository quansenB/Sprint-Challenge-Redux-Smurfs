import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

const combinedReducer = combineReducers({smurfs: rootReducer})

const store = createStore(
  combinedReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  compose(
  applyMiddleware(/* be sure to throw in the proper middlewares here*/thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
