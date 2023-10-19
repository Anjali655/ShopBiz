import React, { useState } from "react";
import { Form, Button, Modal, Input, InputNumber, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createProduct } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function AddProductModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.createProductReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);


  const [modalData, setModalData] = useState({
    name: "",
    price: "",
    description: "",
    rating: "",
    quantity: "",
    image: "",
  });



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    e.preventDefault();

    if (!modalData.image) {
      console.log("no image selected");
      return;
    }

    dispatch(createProduct(modalData));

    console.log("modalData =>", modalData);

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="primary" onClick={showModal}>
        Add Product
      </button>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
              style={{ display: "flex", flexDirection: "row" }}
              value={modalData.name}
              onChange={(e) => {
                setModalData({ ...modalData, name: e.target.value });
              }}
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
              value={modalData.description}
              style={{ display: "flex", flexDirection: "row" }}
              onChange={(e) =>
                setModalData({ ...modalData, description: e.target.value })
              }
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
                style={{ display: "flex", flexDirection: "column" }}
                value={modalData.price}
                // onChange={(value) => console.log("price =>", value)}
                onChange={(e) => setModalData({ ...modalData, price: e })}
                // onChange={(z) => console.log("price", z)}
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
              style={{ display: "flex", flexDirection: "row" }}
              value={modalData.rating}
              onChange={(e) => {
                setModalData({ ...modalData, rating: e.target.value });
              }}
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
                name="quantity"
                placeholder="Please enter quantity of product"
                value={modalData.quantity}
                // onChange={(e) => console.log("quantity",e.target)}
                onChange={(value) =>
                  setModalData({ ...modalData, quantity: value })
                }
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
              onChange={(e) =>
                setModalData({
                  ...modalData,
                  // image: URL.createObjectURL(e.target.files[0]),
                  image: e.target.files[0],
                })
              }
            />
            <img src={file} />
          </Form.Item>
          {/* <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
}

export default AddProductModal;
