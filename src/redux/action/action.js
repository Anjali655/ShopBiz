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
    POST_PRODUCT_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    CART_REQUEST
} from '../constants';



export function setProductData(name, value) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: { [name]: value },
    };
}

export function setCreateProductData(name, value) {
    return {
        type: POST_PRODUCT_SUCCESS,
        payload: { [name]: value },
    };

}

export function setCartData(name, value) {
    // console.log('name name ----- ',name)
    // console.log('value   value ----- ',value)
    return {
        type: CART_REQUEST,
        payload: { [name]: value },
    }
}

export function removeCartData(name, value) {
    console.log('removeCartData --- name',name)
    console.log('removeCartData ---- value',value)
    
}


export function setUpdateProductData(name, value) {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: { [name]: value }
    }
}


const signup = (userData) => {
    console.log("userData>>>>>>>", userData)
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
            alert(res.data.message)


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

const signin = (userData,navigate) => {
    return async (dispatch) => {
        dispatch({ type: SIGNIN_REQUEST });

        try {
            const res = await axiosConfig.post("/users/login", userData)
            console.log('res', res.data)
            // console.log('signin------------', res.data)
            // console.log("sucessss-------------")
            localStorage.setItem("token", (res.data.accessToken));
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    message: "Sign in successfully"
                }
                
            });
            console.log("Dashboard mein pohonch gya")
            navigate("/dashboard");
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

const createProduct = (modalData) => {
    return async (dispatch) => {
        dispatch({ type: POST_PRODUCT_REQUEST })
        try {
            let formData = new FormData();
            formData.append("name", modalData.name);
            formData.append("price", modalData.price);
            formData.append("description", modalData.description);
            formData.append("rating", modalData.rating);
            formData.append("quantity", modalData.quantity);
            formData.append("image", modalData.image);
            // console.log('modalData=----------', modalData)
            const res = await axiosConfig.post("/products/create", formData)
            console.log('createProduct', formData)

            dispatch({
                type: POST_PRODUCT_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    status: true,
                    message: "Product created successfully"
                }
            })
            alert(res.data.message);
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

const getProductsList = (params) => {
    return async (dispatch) => {
        dispatch({ type: GET_PRODUCTS_REQUEST })
        try {
            // /products/lists?page=${1}&limit=${6}&search=${""}
            const res = await axiosConfig.get(`/products/lists?${params}`);
            console.log("Product list returned =>", res.data);

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: {
                    ...res.data,
                    updateStatus: "success",
                    message: "Product list updated successfully",
                }
            })
            console.log("Product list updated successfully")
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_PRODUCTS_FAILURE,
                payload: {
                    updateStatus: "error",
                    message: "Product list failed to update successfully"
                }
            })
        }
    }
}

const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT_REQUEST })
        try {
            const res = axiosConfig.delete(`/products/delete/${id}`);
            console.log("Product to be delete", res.data);

            dispatch({
                type: DELETE_PRODUCT_SUCCESS,
                payload: {
                    ...res.data,
                    status: true,
                    updateStatus: "success",
                    message: "Product deleted successfully"
                }
            })
        }
        catch (error) {
            console.log("error", error)
            dispatch({
                type: DELETE_PRODUCT_FAILURE,
                payload: {
                    updateStatus: "error",
                    message: "Error deleting product"
                }
            })
        }

    }
}

const updateProduct = (updateformData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PRODUCT_REQUEST })

        try {
            let formData = new FormData();
            formData.append("name", updateformData.name);
            formData.append("price", updateformData.price);
            formData.append("description", updateformData.description);
            formData.append("rating", updateformData.rating);
            formData.append("quantity", updateformData.quantity);
            formData.append("image", updateformData.image);

            console.log('updateformData=----------', formData)

            let updateResult = axiosConfig.put(`/products/update/${updateformData._id}`, formData);
            console.log("updateResult", updateResult)
            dispatch({
                type: UPDATE_PRODUCT_SUCCESS,
                payload: {
                    ...updateResult.data,
                    status: true,
                    updateStatus: "success",
                    message: "Product updated successfully"
                }
            })
        }
        catch (error) {
            console.log("error", error)
            dispatch({
                type: UPDATE_PRODUCT_FAILURE,
                payload: {
                    type: UPDATE_PRODUCT_FAILURE,
                    payload: {
                        updateStatus: "error",
                        message: "Error updating product"
                    }
                }
            })
        }
    }
}


export { signup, signin, createProduct, getProductsList, deleteProduct, updateProduct }
// signup and signin actions take user data as a parameter and make POST requests to /signup and /signin endpoints