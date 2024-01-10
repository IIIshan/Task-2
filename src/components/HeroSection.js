// components/HeroSection.js
import React from "react";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font md:mx-20  ">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl md:text-9xl font-Raleway font-bold mb-4 text-gray-900">
              Xenon
              <br className="hidden lg:inline-block" />
              University
            </h1>
            <h2 className="text-4xl font-bold mb-4 text-green-500 font-Raleway">
              Empowering Minds, Shaping Futures
            </h2>
            <p className=" font-Raleway text-2xl ">
              Your journey to excellence starts here!
            </p>
            <div className="flex justify-center my-10 font-Raleway">
              <Link
                to="/signup"
                className="inline-flex text-white bg-green-500 font-bold border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Join Now
              </Link>
              <Link
                to="/login"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Already Joined
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.pexels.com/photos/8106679/pexels-photo-8106679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default HeroSection;
