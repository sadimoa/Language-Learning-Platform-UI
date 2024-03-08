import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const initialValues = {
    name: "",
    description: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
        <div className="w-[50%] flex flex-col flex-wrap items-center justify-between min-h-full p-20">
          <h3 className="text-4xl text-center">Create Account</h3>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="mt-20 flex flex-col items-center justify-center gap-5">
              <Field className="border border-black rounded-md bg-transparent" type="text" name="Name"  />
              <Field className="border border-black rounded-md bg-transparent" type="email" name="Email" />
              <Field className="border border-black rounded-md bg-transparent" type="Password" name="Password" />
              <button className="bg-[#0D8974] border  w-[170px] h-[50px] rounded-full text-center text-sm cursor-pointer text-white  hover:text-[#3bb29e]">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
