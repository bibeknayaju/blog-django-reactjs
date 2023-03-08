import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="h-screen m-auto items-center justify-center flex bg-red-500">
      <div className="flex-col">
        <h1 className="text-white font-Montserrat font-semibold text-4xl text-center mb-5">
          Login{" "}
        </h1>
        <form onSubmit={loginUser}>
          <div className="w-loginWidth border-2 border-white shadow-2xl bg-white opacity-80 p-5 rounded-2xl flex justify-start">
            <div className="p-5 w-1/2">
              <div>
                <h2 className="text-2xl ml-4 font-medium font-Poppins">
                  Email ID
                </h2>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="username"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                  placeholder="Enter Your Email..."
                />
              </div>
              <div>
                <h2 className="text-2xl ml-4 font-medium font-Poppins">
                  Password
                </h2>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                  placeholder="Enter Your Password..."
                />
              </div>

              <button className="text-xl font-semibold border-2 rounded-lg ml-4 mb-4 border-orange-600 p-4">
                CONTINUE
              </button>
            </div>
            <div className="items-center flex">
              <Link to="/">
                <img
                  className="h-32"
                  src="https://cdn.auth0.com/blog/react-js/react.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
