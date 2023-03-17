import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <h1 className="text-xl font-bold">Login</h1>

      <div class="p-2 md:w-1/3">
        <div class="relative">
          <label for="link" class="leading-7 text-sm text-gray-600">
            Mobile No.
          </label>
          <input
            type={"number"}
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div class="p-2 md:w-1/3">
        <div class="relative">
          <label for="link" class="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div class="p-2 w-full">
        <button class="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg">
          {loading ? <ThreeCircles height={25} color="white" /> : "Login"}
        </button>
      </div>
      <div>
        <p>
          Do not have Account?{" "}
          <Link to="/signup">
            <span className="text-red-500">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
