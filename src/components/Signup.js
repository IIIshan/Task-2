import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [uid, setUID] = useState("");

  const signupBtn = async () => {
    const response = await axios.post("http://localhost:3001/user/create", {
      firstname,
      lastname,
      course,
      branch,
      email,
      password,
    });
    setUID(response.data.UID);

    setTimeout(() => {
      navigate("/login");
    }, 15000);

    console.log(response.data);
  };

  return (
    <section className="text-gray-600 body-font relative min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        {uid ? (
          <div className="mb-10 flex mx-auto flex-col text-center">
            <h1 className="text-xl font-Raleway font-bold">
              Your UID is {uid}
            </h1>
            <p className="text-xl font-Raleway font-bold">
              This is a Unique ID, Please Note this Id to login everytime.
              <br />
              This will persist only for 10 seconds.
            </p>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold font-Raleway title-font mb-4 text-gray-900">
            Register Now
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-Raleway font-semibold">
            Be Ready to go on a Beautiful Journey with Xenon.
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
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  type="text"
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
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-lg text-gray-600"
                >
                  Course <span className="text-sm">( BE | BA etc. )</span>
                </label>
                <input
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  type="text"
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
                  Branch
                  <span className="text-sm">
                    ( Computer Science | Chemical etc. )
                  </span>
                </label>
                <input
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-lg text-gray-600"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
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
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full my-10">
              <button
                onClick={signupBtn}
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
