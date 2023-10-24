import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input, DatePicker } from "antd";
const Modall = ({ isModal, setisModal }) => {
  const handleOk = () => {
    setisModal(false);
  };
  const handleCancel = () => {
    setisModal(false);
  };
  const onFinishFailed = (failed) => {console.log("failedddd",failed)};
  const onFinish = (values) => {
    console.log("hello vluessssss", values);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
           initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
              <Form.Item name="date" label="DatePicker">
               <DatePicker/>
              </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Modall;
