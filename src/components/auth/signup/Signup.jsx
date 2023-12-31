import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { signup } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";


function Signup() {
  const dispatch = useDispatch();
  const  user  = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  
  console.log("user", user.updateStatus);

  // useEffect(() => {
  //   console.log('signup-check------', user.checkSignup)
  //   if (user.checkSignup) {
  //     // alert("Signup successful!");
  //     navigate("/signin");
  //   }else{
  //     alert("Please enter your details")
  //   }
  // },[user.checkSignup]);

  const handleSignup = () => {
    // console.log("formData----", formData);
    // let a={
    //   name:"anjali",
    //   email:"dfdgsdfs",
    //   password:"dfgdfgdfgfd",
    //   phone: "fgdgdfg",
    // }
    dispatch(signup(formData));
    console.log("formData",formData);
    if(user.updateStatus == "success"){
      navigate("/signin")
    }
  };

  // const onFinish = async (values) => {
  //   // Handle form submission logic here
  //   console.log("Received values:", values);
  //   try {
  //     // let response = await fetch("http://localhost:3100/api/users/signup", {
  //     //   method: "post",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(values),
  //     // });
  //     let response = await axios.post(
  //       "http://localhost:3100/api/users/signup",
  //       values
  //     );
  //     let Response = await response.data;
  //     console.log("Response", Response);
  //     // Response = await response.json();
  //     // console.log(Response, "Response");
  //     if (Response) {
  //       // Signup successful
  //       console.log("Signup successful!");
  //       alert("Signup successful!");
  //       navigate("/");
  //     } else {
  //       // Handle error
  //       console.error("Signup failed");
  //     }
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error during signup:", error);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("name -----", name);
    // console.log("value -----", value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/signin"
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>
              {/* Form */}
              <Form
                name="myForm"
                // onFinish={handleSignup}
                autoComplete="off"
                className="onSubmitForm"
              >
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <Form.Item
                    className="test"
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      name="email"
                      placeholder="email"
                      style={{ display: "flex" }}
                      value={formData.email}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  {/* End Form Group */}

                  {/* Form Group */}
                  <Form.Item
                    className="test"
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      name="password"
                      placeholder="Password"
                      style={{ display: "flex" }}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    />
                  </Form.Item>
                  {/* End Form Group */}

                  {/* Form Group */}
                  <Form.Item
                    className="test"
                    name="name"
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name",
                      },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback
                  >
                    <Input
                      name="name"
                      placeholder="name"
                      style={{ display: "flex" }}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    />
                  </Form.Item>
                  {/* End Form Group */}

                  {/* Form Group */}
                  <Form.Item
                    className="test"
                    name="phone"
                    label="Phone No."
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                      { min: 10 },
                    ]}
                    hasFeedback
                  >
                    <Input
                      name="phone"
                      placeholder="phone"
                      style={{ display: "flex" }}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    />
                  </Form.Item>
                  {/* End Form Group */}

                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <Input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        I accept the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}

                  {/* Form Group */}
                  <Form.Item wrapperCol={{ span: 24 }} className="test">
                    <Button
                      className="submit-btn"
                      block
                      type="primary"
                      htmlType="submit"
                      style={{ marginTop: "1.2rem" }}
                      onClick={handleSignup}
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                  {/* End Form Group */}
                </div>
              </Form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
