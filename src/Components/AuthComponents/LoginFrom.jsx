import React from "react";

function LoginFrom() {
  return (
    <div className="max-w-4xl mx-auto mt-4 grid place-items-center">
      <div className="my-3 text-xl">
        Welcome to Sajway{" "}
        <span className="text-orange-600 font-bold">LOGIN</span> Page
      </div>
      <form className="w-1/3">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email Adress?</span>
          </label>
          <input
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
