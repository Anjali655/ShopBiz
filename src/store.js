import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/index';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;