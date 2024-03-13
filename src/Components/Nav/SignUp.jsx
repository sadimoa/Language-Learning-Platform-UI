import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-row items-center">
        <div className="min-h-screen bg-[#0D8974] text-[#e8e8e8]  w-[50%]">
          <div className=" text-center m-auto mt-40">
            <h3 className="text-6xl pb-4 font-bold">Welcome Back!</h3>
            <p className="pb-10 text-2xl font-light">
              To keep connects with us please <br />
              Login with your personal Info
            </p>
            <button className="border-[#f5f5f5] border  w-[170px] h-[50px] rounded-full text-center text-sm cursor-pointer hover:bg-[#e1e1] hover:text-[#f5f5f5]">
              Login
            </button>
          </div>
        </div>
        <div className="w-[50%] flex flex-col flex-wrap items-center min-h-full">
          <h3 className="text-5xl font-bold text-[#44c2ad]">Create Account</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mt-10 flex flex-col w-[350px] space-y-3">
              <Field
                className="border shadow p-1.5 px-2 border-gray-400 rounded-md bg-transparent"
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className=" text-red-300"
              />
              <Field
                className="border shadow p-1.5 px-2 border-gray-400 rounded-md bg-transparent"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className=" text-red-300"
              />

              <Field
                className="border shadow p-1.5 px-2 border-gray-400 rounded-md bg-transparent"
                type="Password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className=" text-red-300"
              />

              <button
                type="submit"
                className="bg-[#0D8974] m-auto  px-12 py-3 rounded-3xl text-center text-sm cursor-pointer text-white  hover:bg-[#1b7267]"
              >
                Submit
              </button>
            </Form>
          </Formik>

          <div className="flex items-center mt-24 gap-1">
            <BiLogoFacebookCircle className=" text-blue-700  text-3xl" />
            <AiFillGoogleCircle className="text-3xl text-red-500" />
            <FaLinkedin className=" text-blue-500  text-3xl" />
          </div>
          <h4 className="text-center mt-3 font-light text-gray-300 ">
            Or use Email for reistration
          </h4>
        </div>
        
      </div>
    </>
  );
};

export default Signup;
