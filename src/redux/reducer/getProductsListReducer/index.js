import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from "../../constants";

const initialState = { productList: {}, loading: false, error: null };

const getProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST: {
            return { ...state, loading: true, error: null }
        }
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, loading: false, ...action.payload }
        }
        case GET_PRODUCTS_FAILURE: {
            return { ...state, loading: false, ...action.payload }
        }
        default:
            return state;

    }
}

export default getProductListReducer;