import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleButtonClick = () => {};

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="header"
        />
      </div>
      <form className="absolute w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80 rounded-sm ">
        <h1 className="font-bold text-4xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-sm "
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm "
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-sm "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <h1 className=" text-gray-500 text-lg ">
          {isSignInForm ? "New to Netflix? " : " Already registered! "}

          <span
            className=" text-white cursor-pointer "
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in."}
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
