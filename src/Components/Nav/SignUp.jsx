import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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
      <div className="w-full min-h-screen flex flex-row items-center ">
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
          <h3 className="text-5xl font-bold text-[#44c2ad]">
            Create Account
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="mt-10 flex flex-col w-[350px] space-y-5">
              <Field
                className="border p-1 px-2 border-black rounded-md bg-transparent"
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" className=" text-red-500"/>
              <Field
                className="border p-1 px-2 border-black rounded-md bg-transparent"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email"/>

              <Field
                className="border p-1 px-2 border-black rounded-md bg-transparent"
                type="Password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" />

              <button
                type="submit"
                className="bg-[#0D8974] border m-auto  w-[170px] h-[50px] rounded-full text-center text-sm cursor-pointer text-white  hover:text-[#3bb29e]"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
