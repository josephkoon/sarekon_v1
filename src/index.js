import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger'

//setup
import App from './App';
import registerServiceWorker from './registerServiceWorker';



//create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')
);
registerServiceWorker();



