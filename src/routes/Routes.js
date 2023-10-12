import * as React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Signup from '../components/auth/signup';
import Signin from '../components/auth/signin';
import Home from "../components/0auth/home"
import Dashboard from "../components/0auth/dashboard";
import Cart from "../components/0auth/cart";
import CartPage from "../components/0auth/cartPage/CartPage";
import Checkout from "../components/0auth/checkout";
import AddProducts from "../components/0auth/add products";
import AddProductModal from "../components/0auth/addProductModal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path:"/cart",
        element: <CartPage/>
    },
    {
        path:"/checkout",
        element: <Checkout/>
    },
    {
        path:"/addproducts",
        element: <AddProducts/>
    },
    {
        path:"/addproductmodal",
        element: <AddProductModal/>
    }


]);

export default router;