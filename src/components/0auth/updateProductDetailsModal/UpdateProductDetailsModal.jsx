import React, { useState, useEffect } from "react";
import { Form, Modal, Input, InputNumber } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateProductData } from "../../../redux/action/action";
import { updateProduct } from "../../../redux/action/action";
import { getProductsList } from "../../../redux/action/action";

const UpdateProductDetailsModal = () => {
  let dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState("");

  let param = `page=${pageNo}&limit=${limit}&search=${search}`;

  let productData = useSelector((state) =>
    state.updateProductReducer.productData
      ? state.updateProductReducer.productData
      : []
  );

  

  let modal = useSelector((state) => state.updateProductReducer.modal);
  let status = useSelector((state) => state.updateProductReducer.status);


  // useEffect(() => {
  //   if(status){
  //     dispatch(getProductsList(param))
  //   }
  // },[status])

  // useEffect(() => {
  //   if (productData) {
  //     console.log("productDataAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", productData);
  //     setProductDetails({
  //       name: productData.name,
  //       description: productData.description,
  //       price: productData.price,
  //       rating: productData.rating,
  //       quantity: productData.quantity,
  //       image: productData.image,
  //     });
  //   }
  // }, [productData]);

  // console.log("productData", productData);
  // console.log("qqqqqqqqqqqqqqq=>", productDetails);


  // useEffect(() => {
  //   console.log("productData",productData)
  //   setProductDetails(productData)
  // }, [])

  // console.log("productData", productData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    console.log("sampleData", sampleData);
    setIsModalOpen(false);
    dispatch(setUpdateProductData("modal", false));
    dispatch(updateProduct(sampleData));
    dispatch(getProductsList(param))
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(setUpdateProductData("modal", false));
  };

  let sampleData = { ...productData };
  const handleInputChange = (e) => {
    sampleData[e.target.name] = e.target.value;
    console.log("name", e.target.name);
    console.log("value", e.target.value);
  };

  const handleInputNumber = (key, e) => {
    console.log("handleInputNm", e);
    sampleData[key] = e;
    console.log("response alel", sampleData);
  };

  const handleUpload = (e) => {
    console.log("handleUpload", e);
    // sampleData(e)
    sampleData["image"] = e;
  };

  console.log("productData", productData)

  return (
    <>
      {/* <EditTwoTone type="primary" onClick={showModal} /> */}

      <Modal
        title="Edit Product"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <p>Name : {productData ? productData.name : "productData"}</p> */}
        <Form name="myForm" autoComplete="off" onFinish="">
          {/* Form Group */}
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter name of product",
              },
            ]}
            hasFeedback
          >
            <Input
              name="name"
              placeholder="Name"
              defaultValue={productData ? productData.name : "productData"}
              onChange={(e) => handleInputChange(e)}
              style={{ display: "flex", flexDirection: "row" }}
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter description of product",
              },
            ]}
            hasFeedback
          >
            <Input
              name="description"
              placeholder="Description"
              defaultValue={
                productData ? productData.description : "productData"
              }
              onChange={(e) => handleInputChange(e)}
              // onChange={(e) => handleInputChange("description",e.target.value)}
              style={{ display: "flex", flexDirection: "row" }}
            />
          </Form.Item>

          <Form.Item label="Price" name="price">
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please enter price of product",
                },
              ]}
              noStyle
            >
              <InputNumber
                min={1}
                name="price"
                placeholder="Price"
                defaultValue={productData ? productData.price : "productData"}
                // onChange={(val) => console.log( val)}
                onChange={(e) => handleInputNumber("price", e)}
                style={{ display: "flex", flexDirection: "column" }}
              />
            </Form.Item>
            <span
              className="ant-form-text"
              style={{
                marginLeft: 8,
              }}
            ></span>
          </Form.Item>

          <Form.Item
            name="rating"
            label="Rating"
            rules={[
              {
                required: true,
                message: "Please rate the product",
              },
            ]}
            hasFeedback
          >
            <Input
              name="rating"
              placeholder="Rate the product"
              defaultValue={productData ? productData.rating : "productData"}
              onChange={(e) => handleInputChange(e)}
              style={{ display: "flex", flexDirection: "row" }}
            />
          </Form.Item>

          <Form.Item label="Quantity">
            <Form.Item
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please enter quantity of product",
                },
              ]}
              noStyle
            >
              <InputNumber
                min={1}
                max={10}
                defaultValue={
                  productData ? productData.quantity : "productData"
                }
                onChange={(e) => handleInputNumber("quantity", e)}
                name="quantity"
                placeholder="Please enter quantity of product"
              />
            </Form.Item>
            <span
              className="ant-form-text"
              style={{
                marginLeft: 8,
              }}
            ></span>
          </Form.Item>

          <Form.Item
            name="image"
            label="Image"
            rules={[
              {
                required: true,
                message: "please upload product image",
              },
            ]}
          >
            <Input
              type="file"
              name="image"
              onChange={(e) => handleUpload(e.target.files[0])}
            />
            <img src={productData ? productData.image : "productData"} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateProductDetailsModal;
