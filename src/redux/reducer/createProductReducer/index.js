import {
    POST_PRODUCT_REQUEST,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_FAILURE
} from "../../constants";

const initialState = { product: {}, loading: false, error: null }

const createProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_PRODUCT_REQUEST: {
            return { ...state, loading: true, error: null }
        }
        case POST_PRODUCT_SUCCESS: {
            return { ...state, loading: false, ...action.payload }
        }
        case POST_PRODUCT_FAILURE: {
            return { ...state, loading: false, ...action.payload }
        }
        default:
            return state;
    }
}

export default createProductReducer;

// this reducer handles the creation of product and updates the state accordingly