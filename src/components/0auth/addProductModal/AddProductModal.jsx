import React, { useState } from "react";
import { Form, Button, Modal, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createProductReducer } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

function AddProductModal() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.createProductReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
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
        <Form autoComplete="off" onFinish={(values) => console.log({ values })}>
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
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent=""
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                message: "Please enter price of the product",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Price" />
          </Form.Item>

          <Form.Item label="Quantity">
            <Form.Item
              name="input-number"
              rules={[
                {
                  required: true,
                  message: "Please enter quantity of product",
                },
              ]}
              noStyle
            >
              <InputNumber min={1} max={10} />
            </Form.Item>
            <span
              className="ant-form-text"
              style={{
                marginLeft: 8,
              }}
            ></span>
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
