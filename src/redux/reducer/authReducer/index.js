import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
} from '../../constants';

const initialState = { user: {}, loading: false, error: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNIN_REQUEST: {
            return { ...state, loading: true, error: null }
        }
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS: {
            console.log('signup/signin--check---', action.payload)
            return { ...state, loading: false, ...action.payload }
        }
        case SIGNUP_FAILURE:
        case SIGNIN_FAILURE: {
            return { user: null, isloading: false, ...action.payload }
        }
        default:
            return state;
    }

}


export default authReducer;

//This reducer handles sign-up and sign-in actions, updating the state based on the API request status.
