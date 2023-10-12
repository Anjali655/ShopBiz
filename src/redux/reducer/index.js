import authReducer from './authReducer';
import createProductReducer from './createProductReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer,
    createProductReducer
})

export default rootReducer;

// This rootReducer is responsible for combining all the reducers