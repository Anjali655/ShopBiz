import axiosConfig from '../axiosConfig';
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    POST_PRODUCT_REQUEST,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_FAILURE
} from '../constants';


const signup = (userData) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });
        try {
            const res = await axiosConfig.post("/users/signup", userData)
            console.log('signup success-------', res.data)
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    message: res?.data.message
                }

            });
            alert("Signup successfull")

        } catch (error) {
            console.log('signup error-------', error.response.data.message)
            dispatch({
                type: SIGNUP_FAILURE,
                payload: {
                    updateStatus: "error",
                    message: error.response.data.message
                }

            })
            alert("error.response.data.message")
        }
    }
}

const signin = (userData) => {
    return async (dispatch) => {
        dispatch({ type: SIGNIN_REQUEST });

        try {
            const res = await axiosConfig.post("/users/login", userData)
            console.log('res', res.data)
            // console.log('signin------------', res.data)
            // console.log("sucessss-------------")
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    message: res?.data.message
                }
            });
            localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
            alert('Signin successful');

        } catch (error) {
            // console.log('catch error------------', error.response.data.message, error.response.data.status)
            dispatch({
                type: SIGNIN_FAILURE,
                payload: { updateStatus: "error", message: error.response.data.message }
            })
            alert("Invalid User")
        }
    }
}

const createProduct = (ProductData) => {
    return async (dispatch) => {
        dispatch({ type: POST_PRODUCT_REQUEST })
        try {
            const res = await axiosConfig.post("/products/create", ProductData)
            console.log('createProduct', res.data)

            dispatch({
                type: POST_PRODUCT_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    message: "Product created successfully"
                }
            })

        } catch (error) {
            console.log("error", error);
            dispatch({
                type: POST_PRODUCT_FAILURE,
                payload: {
                    updateStatus: "error",
                    message: "Product creation failed"
                }
            })
        }

    }
}

export { signup, signin, createProduct }
// signup and signin actions take user data as a parameter and make POST requests to /signup and /signin endpoints