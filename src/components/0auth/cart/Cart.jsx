import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { getProductsList, setCartData } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const cart = useSelector((state) =>
    state.cartReducer.cart ? state.cartReducer.cart : []
  );

  const handleQtyIncrease = (x) => {
    var index = cart.findIndex((p) => p.productsdata._id === x.productsdata._id);
    let updatedCart =[...cart]
    updatedCart[index].quantity += 1;
    updatedCart[index].totalprice = updatedCart[index].productsdata.price * updatedCart[index].quantity;
    dispatch(setCartData("cart", updatedCart));
  };

  const handleQtyDecrease = (x) => {
    
    var index = cart.findIndex((p) => p.productsdata._id === x.productsdata._id);
    let updatedCart = [...cart]
    updatedCart[index].quantity -= 1;
    updatedCart[index].totalprice = cart[index].productsdata.price * cart[index].quantity;
    dispatch(setCartData("cart", updatedCart));
  };

  // const handleSum = () => {
  //   let sum =0
  //   for(let a of cart) {
  //     sum += Number(a.totalprice)
  //   }
  //   return sum;
  // }

  const handleSum = () => {
    let sum = 0;
    cart.forEach((x) => sum += x.totalprice)
    return sum;
  }


  return (
    <>
      <div className="mx-auto mt-12 bg-white max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h6 className="text-4xl my-12 font-bold mb-4 tracking-tight text-gray-900">
            𝕮𝖆𝖗𝖙
          </h6>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map((x) => {
                return (
                  <>
                
                <li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={x.productsdata.image}
                      // alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{x.productsdata.name}</h3>

                        <p className="ml-4">
                          Rs. {x.totalprice}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>

                        <button
                          type="button"
                          onClick={()=>handleQtyIncrease(x)}
                          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          +
                        </button>
                        <p className="inline text-sm mr-2 font-medium leading-6">
                          {x.quantity}
                        </p>
                        <button
                          type="button"
                          onClick={()=>handleQtyDecrease(x)}
                          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                        >
                          -
                        </button>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                </>
              )})}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            {/* {cart.map((num) => (
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>{() => { return num?.productsdata?.price * num?.productsdata?.quantity} }</p>
              </div>
            ))} */}
            {/* <p>{cart.totalprice}</p> */}
            {/* <p>{cart.length}</p> */}
            <p>Rs.{handleSum()}</p>
          </div>

          <p className="mt-0.5 mb-5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <Link to="/checkout" className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </Link>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or {"    "}
              <Link to="/dashboard">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Cart;
