import React, { useEffect, useState } from "react";
import { DeleteTwoTone } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import {
  deleteProduct,
  setProductData,
  getProductsList,
} from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const DeleteProductModal = () => {
  let dispatch = useDispatch();

  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState("");


  let productsList = useSelector((state) =>
    state.getProductListReducer.data ? state.getProductListReducer.data : []
  );

  let deletedProduct = useSelector((state) => state.deleteProductReducer);

  let product_id = useSelector((state) => state.deleteProductReducer.product_id);
  
  let status = useSelector((state) => state.deleteProductReducer.status?state.deleteProductReducer.status:false);

  let modal = useSelector((state) =>state.deleteProductReducer.modal ? state.deleteProductReducer.modal : false);

  //   console.log("deletedProductReducer =>", deletedProduct);
  
  console.log("product_id", product_id, "productsList =>", productsList);

  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  let param = `page=${pageNo}&limit=${limit}&search=${search}`;

  const handleOk = () => {
    dispatch(setProductData("modal", false));
    console.log("delete product", product_id);
    dispatch(deleteProduct(product_id))
    setTimeout(() => {
      dispatch(getProductsList(param));
    }, 500)

    // .then(() => {
    //   dispatch(getProductsList(param));
    // });
  };

  useEffect( () =>{
    if(status){
        dispatch(getProductsList(param));
    }
  },[status])

  const handleCancel = () => {
    dispatch(setProductData("modal", false));
    dispatch(setProductData("product_id", ""));
  };
  return (
    <>
      <Modal
        open={modal}
        title="Remove Product"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </>
  );
};
export default DeleteProductModal;
