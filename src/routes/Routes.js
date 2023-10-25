import * as React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Signup from '../components/auth/signup';
import Signin from '../components/auth/signin';
import Dashboard from "../components/0auth/dashboard";
import Cart from "../components/0auth/cart";
import CartPage from "../components/0auth/cartPage/CartPage";
import Checkout from "../components/0auth/checkout";
import AddProducts from "../components/0auth/add products";
import AddProductModal from "../components/0auth/addProductModal";
import DeleteProductModal from "../components/0auth/deleteProductModal";
import UpdateProductDetailsModal from "../components/0auth/updateProductDetailsModal";
import ProtectedRoutes from "./ProtectedRoutes";
import CustomLayout from "../components/CustomLayout";



//     {
//         path: "/signup",
//         element: <Signup />,
//     },
//     {
//         path: "/signin",
//         element: <Signin />,
//     },
//     {
//         path: "/dashboard",
//         element: <Dashboard />,
//     },
//     {
//         path: "/cart",
//         element: <CartPage />
//     },
//     {
//         path: "/checkout",
//         element: <Checkout />
//     },
//     {
//         path: "/addproducts",
//         element: <AddProducts />
//     },
//     {
//         path: "/addproductmodal",
//         element: <AddProductModal />
//     },
//     {
//         path: "/deleteproductmodal",
//         element: <DeleteProductModal />
//     },
//     {
//         path: "/updateproductdetailsmodal",
//         element: <UpdateProductDetailsModal />
//     },
//     {
//         path: "/header",
//         element: <Header />
//     },
//     {
//         path: "footer",
//         element: <Footer />
//     },
//     {
//         path: "/sidebar",
//         element: <Sidebar />
//     }
// ]);


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <ProtectedRoutes />,
//         children: [
//             {
//                 path: "/dashboard",
//                 element: <Dashboard />,
//             },
//             {
//                 path: "/signup",
//                 element: <Signup />,
//             },
//             {
//                 path: "/signin",
//                 element: <Signin />,
//             },

//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements([
        <>
            <Route path="/signin" element={<Signin />} />,
            <Route path="/signup" element={<Signup />} />,
            

            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<CustomLayout />}>
               
                    <Route path="/dashboard" element={<Dashboard />} />,
                    <Route path="/cart" element={<CartPage />} />,
                    <Route path="/addproducts" element={<AddProducts />} />,
                    <Route path="/checkout" element={<Checkout />} />,
                    <Route path="/addproductmodal" element={<AddProductModal />} />,
                    <Route path="/deleteproductmodal" element={<DeleteProductModal />} />,
                    <Route path="/updateproductdetailsmodal" element={<UpdateProductDetailsModal />} />,
                    <Route path="/cart" element={<CartPage />} />,
                    {/* <Route path="*" element={<Error />} />, */}
                </Route>
            </Route>
        </>
    ])
)


export default router;