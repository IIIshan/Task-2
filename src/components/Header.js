// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { username, setUsername } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("userId");
    setUsername("");
    navigate("/login");
  };

  return (
    <header className="bg-green-800 text-white p-4 w-full flex justify-between items-center md:px-10">
      <div>
        <h1 className="text-3xl font-light font-Raleway">XenonUniversity</h1>
      </div>
      <ul className="flex justify-center items-center space-x-10 font-bold font-Raleway text-xl">
        <Link to="/">
          <li className="hover:text-green-600 hover:bg-white px-4 py-2 hover:cursor-pointer">
            Home
          </li>
        </Link>
        {!username ? (
          <>
            <Link to="/login">
              <li className="hover:text-green-600 hover:bg-white px-4 py-2 hover:cursor-pointer">
                Login
              </li>
            </Link>
            <Link to="/signup">
              <li className="hover:text-green-600 hover:bg-white px-4 py-2 hover:cursor-pointer">
                Signup
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/userprofile">
              <li className="hover:text-green-600 hover:bg-white px-4 py-2 hover:cursor-pointer">
                My Profile
              </li>
            </Link>
            <div className="flex space-x-4 items-center">
              <p className="underline underline-offset-2">{username}</p>
              <button onClick={logout} className="bg-red-600 px-4 py-1">
                Logout
              </button>
            </div>
          </>
        )}
        <Link to="/contact">
          <li className="hover:text-green-600 hover:bg-white px-4 py-2 hover:cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
