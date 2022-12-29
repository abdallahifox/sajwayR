import React, { useRef } from "react";

//TODO: redux Import
import { useSelector, useDispatch } from "react-redux";

//TODO: Router Navigator
import { useNavigate } from "react-router-dom";

function LoginFrom() {
  const userEmail = useRef(); // get the email
  const userPassword = useRef(); // get the password
  const Dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isAuth);

  const navigator = useNavigate(); // navigates to the Home page after authentication
  const loginHandelar = (e) => {
    e.preventDefault();
    const userData = {
      userName: userEmail.current.value,
      userHash: userPassword.current.value,
    };

    userEmail.current.value = "";
    userPassword.current.value = "";

    navigator("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 grid place-items-center">
      <div className="my-3 text-xl">
        Welcome to Sajway{" "}
        <span className="text-orange-600 font-bold">LOGIN</span> Page
      </div>
      <form onSubmit={loginHandelar} className="w-1/3">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email Adress?</span>
          </label>
          <input
            ref={userEmail}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password?</span>
          </label>
          <input
            ref={userPassword}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mt-3">
          <button className="btn gap-2 bg-orange-700 border-none outline-none hover:bg-orange-600 rounded-xl px-10">
            <span className="text-xs inline-block">Login</span>
            <img
              src="https://api.iconify.design/eva:arrowhead-right-outline.svg?color=%23ffffff"
              alt="ICON"
              className="inline-block ml-4 w-5 h-5'"
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFrom;
