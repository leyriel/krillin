import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));


