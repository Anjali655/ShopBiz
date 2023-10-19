import authReducer from './authReducer';
import createProductReducer from './createProductReducer';
import getProductListReducer from "./getProductsListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer,
    createProductReducer,
    getProductListReducer
})

export default rootReducer;

// This rootReducer is responsible for combining all the reducers