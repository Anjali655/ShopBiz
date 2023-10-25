import React, { useState, useEffect } from "react";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import UpdateProductDetailsModal from "../updateProductDetailsModal";
import { Button, Modal,Form } from "antd";
import AddProductModal from "../addProductModal";
import DeleteProductModal from "../deleteProductModal";
import { getProductsList } from "../../../redux/action/action";
import { setProductData } from "../../../redux/action/action";
import {
  setUpdateProductData,
  setCreateProductData,
} from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

function AddProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [pageNo, setPageNo] = useState(1);
  // const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState("");
  
console.log("search=>",search);

  const productsList = useSelector((state) =>
    state.getProductListReducer.data ? state.getProductListReducer.data : []
  );
  console.log("productsList =>", productsList);

  const pagenumber = useSelector((state) =>
    state.getProductListReducer.pagenumber
      ? state.getProductListReducer.pagenumber
      : 1
  );

  const limit = useSelector((state) =>
    state.getProductListReducer.limit ? state.getProductListReducer.limit : 4
  );

  let param = `page=${pagenumber}&limit=${limit}&search=${search}`;

  const status = useSelector((state) => state.createProductReducer.status);

  const deletedProduct = useSelector(
    (state) => state.deleteProductReducer.status
  );

  const updateProduct = useSelector(
    (state) => state.updateProductReducer.status
  );

  // console.log("deleteProductReducer =>", deletedProduct);

  useEffect(() => {
    if (status) {
      // dispatch(getProductsList(param));
      dispatch(setCreateProductData("status", false));
    }
  }, [status]);

  useEffect(() => {
    if (updateProduct) {
      console.log("-------------hhhhhhhhhhhhh---Product list-------------");
      dispatch(getProductsList(param));
      dispatch(setUpdateProductData("status", false));
      dispatch(setUpdateProductData("productData", ""));
    }
  }, [updateProduct]);

  useEffect(() => {
    dispatch(getProductsList(param));
  }, [search]);

  // handling deleteProduct
  const handleDeleteProduct = (id) => {
    console.log("delete product", id);
    dispatch(setProductData("modal", true));
    dispatch(setProductData("product_id", id));
    dispatch(getProductsList(param));
  };

  // handling updateProduct
  const handleUpdateProduct = (productData) => {
    setTimeout(() => {
      console.log("handleUpdateProduct-------------", productData);
      dispatch(setUpdateProductData("modal", true));
      dispatch(setUpdateProductData("productData", productData));
      // dispatch(getProductsList(param));
    }, 500);
  };

  // Pagination
  const handlePrevBtn = () => {
    console.log("handlePrevBtn");
    let param = `page=${
      Number(pagenumber) - 1
    }&limit=${limit}&search=${search}`;
    dispatch(getProductsList(param));
  };

  const handleNextBtn = () => {
    console.log("handleNextBtn");
    let param = `page=${
      Number(pagenumber) + 1
    }&limit=${limit}&search=${search}`;
    dispatch(getProductsList(param));
  };

  return (
    <>
      {/* Table Section */}
      <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto flex justify-center">
            <div className="p-1.5 min-w-fit inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="px-2 py-1 rounded hover:bg-blue-100"
                      style={{ border: "1px solid #2563EB", color: "black" }}
                    >
                      {`< Back`}
                    </button>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Products
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Add Products, edit and more.
                    </p>
                  </div>
                  <div>

                    
                    <div className="inline-flex gap-x-2 mr-20">
                      <Form autocomplete="off">
                        <label
                          htmlFor="default-search"
                          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </div>
                          <input
                            type="search"
                            onChange={(e) => setSearch(e.target.value)}
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Product.."
                            required=""
                          />
                          {/* <button
                            type="submit"
                            onClick={() => console.log("Default Search")}
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Search
                          </button> */}
                        </div>
                      </Form>
                    </div>


                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        View all
                      </a>
                      <a
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        href="#"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* <button>Add Product</button> */}
                        <AddProductModal />
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="pl-6 py-3 text-left">
                        <label
                          htmlFor="hs-at-with-checkboxes-main"
                          className="flex"
                        >
                          <input
                            type="checkbox"
                            className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-at-with-checkboxes-main"
                          />
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Image
                          </span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Name
                          </span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Description
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex justify-end gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Price
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Quantity
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex justify-end gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Rating
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Edit
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Remove
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {productsList.map((product) => {
                      // console.log("Product: " + product);
                      return (
                        <tr key={product._id}>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 py-3">
                              <label
                                htmlFor="hs-at-with-checkboxes-1"
                                className="flex"
                              >
                                <input
                                  type="checkbox"
                                  className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-at-with-checkboxes-1"
                                />
                                <span className="sr-only">Checkbox</span>
                              </label>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                              <div className="flex items-center gap-x-3">
                                <img
                                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ml-5"
                                  src={product.image}
                                  alt="Image Description"
                                />
                              </div>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {product.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm text-gray-500">
                                    {product.description}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="flex justify-end px-7 py-3">
                              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {product.price}
                              </span>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="inline-flex items-center gap-1.5 py-3 px-3 ml-4 rounded-full text-xs font-medium">
                                {product.quantity}
                              </span>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                              <span className="inline-flex items-center gap-1.5 py-3 px-3 ml-4 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {product.rating}
                              </span>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-1.5">
                              <a
                                className="inline-flex items-center ml-2 gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                href="#"
                              >
                                {/* <span className="inline-flex items-center gap-1.5 py-3 px-3 ml-4 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  <button onClick={() => console.log("productMe",product)}>{product.name}</button>
                                </span> */}
                                <EditTwoTone
                                  onClick={() => {
                                    handleUpdateProduct(product);
                                  }}
                                />

                                <UpdateProductDetailsModal />
                              </a>
                            </div>
                          </td>

                          <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-1.5">
                              <a
                                className="inline-flex items-center ml-5 gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                href="#"
                              >
                                <DeleteTwoTone
                                  onClick={() => {
                                    handleDeleteProduct(product._id);
                                  }}
                                />
                                <DeleteProductModal />
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        4
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        onClick={() => handlePrevBtn()}
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNextBtn()}
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        Next
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
      {/* <UpdateProductDetailsModal show={true}/> */}
    </>
  );
}

export default AddProducts;
