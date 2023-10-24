import {
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE
} from "../../constants";


const initialState = { product: {}, loading: false, error: null }

const updateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST: {
            return { ...state, loading: true, error: null }
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return { ...state, loading: false, ...action.payload }
        }
        case UPDATE_PRODUCT_FAILURE: {
            return { ...state, loading: false, ...action.payload }
        }
        default:
            return state;
    }
}

export default updateProductReducer;