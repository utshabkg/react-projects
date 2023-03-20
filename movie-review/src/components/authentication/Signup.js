import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "../firebase/firebase";
import swal from "sweetalert";
import bcrypt from "bcryptjs";
import { addDoc } from "firebase/firestore";
import { usersRef } from "../firebase/firebase";

const auth = getAuth(app);
const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const requestOtp = () => {
    setLoading(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+88${form.mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setOtpSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = () => {
    try {
      setLoading(true);
      window.confirmationResult.confirm(OTP).then((result) => {
        uploadData();
        swal({
          text: "Sucessfully Registered",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        navigate("/login");
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadData = async () => {
    try {
      const salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(form.password, salt);
      await addDoc(usersRef, {
        name: form.name,
        password: hash,
        mobile: form.mobile,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <h1 className="text-xl font-bold">Create an Account</h1>

      {otpSent ? (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label
                for="otp"
                class="leading-7 text-sm text-gray-400 font-bold"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                class="w-full bg-purple-400 rounded border border-gray-300 focus:bg-purple-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              onClick={verifyOTP}
              class="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg"
            >
              {loading ? (
                <ThreeCircles height={25} color="white" />
              ) : (
                "Confirm OTP"
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label
                for="name"
                class="leading-7 text-sm text-gray-400 font-bold"
              >
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
              <label
                for="mobile"
                class="leading-7 text-sm text-gray-400 font-bold"
              >
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
              <label
                for="password"
                class="leading-7 text-sm text-gray-400 font-bold"
              >
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
            <button
              onClick={requestOtp}
              class="flex mx-auto text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg"
            >
              {loading ? (
                <ThreeCircles height={25} color="white" />
              ) : (
                "Request OTP"
              )}
            </button>
          </div>
        </>
      )}

      <div>
        <p>
          Already have Account?{" "}
          <Link to="/login">
            <span className="text-red-500">Login</span>
          </Link>
        </p>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Signup;
