import {
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from "../../constants"


const initialState = { product: {}, loading: false, error: null }

const deleteProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_PRODUCT_REQUEST: {
            return { ...state, loading: true, error: false }
        }
        case DELETE_PRODUCT_SUCCESS: {
            return { ...state, loading: false, ...action.payload }
        }
        case DELETE_PRODUCT_FAILURE: {
            return { ...state, loading: false, ...action.payload }
        }
        default:
            return state;
    }
}

export default deleteProductReducer;