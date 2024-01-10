import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
const Signup = () => {
  const { setUsername } = useContext(AppContext);
  const [userID, setUID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginBtn = async () => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        userID,
        password,
      });
      setUsername(response.data.firstname);
      window.localStorage.setItem("username", response.data.firstname);
      window.localStorage.setItem("userId", response.data.uid);
      navigate("/");
    } catch (error) {
      console.log("Error in logging in");
    }
  };

  return (
    <section className="text-gray-600 body-font relative min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold font-Raleway title-font mb-4 text-gray-900">
            Login Now
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-Raleway font-semibold">
            Hey! Good to see you Again.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto font-Raleway">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-lg text-gray-600"
                >
                  UID Number
                </label>
                <input
                  onChange={(e) => {
                    setUID(e.target.value);
                  }}
                  type="number"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-lg text-gray-600"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full my-10">
              <button
                onClick={loginBtn}
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
