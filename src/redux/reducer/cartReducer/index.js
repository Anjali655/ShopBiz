import {
    CART_REQUEST
} from "../../constants";


const initialState = { cart: [], loading: false, error: null }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_REQUEST: {
            return { ...state, loading: true, error: null, ...action.payload }
        }
        default:
            return state;
    }
}

export default cartReducer;