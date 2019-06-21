import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ './reducers';

const store = createStore(
  () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
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
