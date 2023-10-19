import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/index';

// Import the package
import logger from "redux-logger";


import { applyMiddleware, createStore } from 'redux';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;