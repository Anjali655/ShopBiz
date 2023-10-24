import authReducer from './authReducer';
import createProductReducer from './createProductReducer';
import getProductListReducer from "./getProductsListReducer";
import deleteProductReducer from "./deleteProductReducer";
import updateProductReducer from "./updateProductReducer";
import cartReducer from "./cartReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer,
    createProductReducer,
    getProductListReducer,
    deleteProductReducer,
    updateProductReducer,
    cartReducer
})

export default rootReducer;

// This rootReducer is responsible for combining all the reducers