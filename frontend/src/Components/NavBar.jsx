import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function NavBar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="sticky top-0 flex-col justify-between items-center md:items-center p-5 text-white m-auto bg-navbar">
      <div className="max-w-7xl m-auto flex-col  ">
        <div className="flex justify-between">
          <img
            className=" h-11"
            src="https://cdn.auth0.com/blog/react-js/react.png"
            alt=""
          />
          <Link to="/">
            <h1 className="text-3xl uppercase font-Montserrat cursor-pointer font-bold">
              Blog Django
            </h1>
          </Link>

          {user ? (
            <button
              onClick={logoutUser}
              className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600 pt-4 pb-4 pl-5 pr-5">
              Log out | {user.username}
            </button>
          ) : (
            <div>
              <Link to="/login">
                <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600 pt-4 pb-4 pl-5 pr-5">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600 pt-4 pb-4 pl-5 pr-5">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

    // <div>
    //   <Link to="/">Home</Link>
    //   <span> | </span>
    //   {user ? (
    //     <p onClick={logoutUser}>Logout</p>
    //   ) : (
    //     <Link to="/login">Login</Link>
    //   )}
    // </div>
  );
}

export default NavBar;
