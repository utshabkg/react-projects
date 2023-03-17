import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  

  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <h1 className="text-xl font-bold">Create an Account</h1>

      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="name" class="leading-7 text-sm text-gray-400 font-bold">
            Name
          </label>
          <input
            placeholder="Your Name"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            class="w-full bg-purple-400 rounded border border-gray-300 focus:bg-purple-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="mobile" class="leading-7 text-sm text-gray-400 font-bold">
            Mobile Number
          </label>
          <input
            placeholder="Your Phone Number"
            type={"number"}
            id="mobile"
            name="mobile"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            class="w-full bg-purple-400 rounded border border-gray-300 focus:bg-purple-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="password" class="leading-7 text-sm text-gray-400 font-bold">
            Password
          </label>
          <input
            placeholder="Password"
            type={"password"}
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            class="w-full bg-purple-400 rounded border border-gray-300 focus:bg-purple-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </div>
      <div class="p-2 w-full">
        <button class="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg">
          {loading ? <ThreeCircles height={25} color="white" /> : "Sign Up"}
        </button>
      </div>
      <div>
        <p>
          Already have Account?{" "}
          <Link to="/login">
            <span className="text-red-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
