import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // logic to check if passwords match
  const passwordMatch = password === confirmPassword;

  // error message
  const errorMessage = passwordMatch ? "" : "Passwords do not match!!";

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/signup/", {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Data Sent for signup users:", response);
      })
      .catch((error) => {
        console.log("There is Error:", error);
      });
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    history.push("/");
  }

  return (
    <div className="h-screen m-auto items-center justify-center flex bg-red-500">
      <div className="flex-col">
        <h1 className="text-white font-Montserrat font-semibold text-4xl text-center mb-5">
          Sign Up
        </h1>
        <div className="w-loginWidth border-2 border-white shadow-2xl bg-white opacity-80 p-5 rounded-2xl flex justify-start">
          <div className="p-5 w-1/2">
            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Full Name
              </h2>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your username..."
              />
            </div>
            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Username
              </h2>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your username..."
              />
            </div>
            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Email ID
              </h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
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

            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Confirm Password
              </h2>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="password"
                type="password"
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your Confirm Password..."
              />
            </div>
            {errorMessage && (
              <div className="text-red-700 mb-3 ml-4">{errorMessage}</div>
            )}

            <button
              onClick={handleSubmit}
              className="text-xl font-semibold border-2 rounded-lg ml-4 mb-4 border-orange-600 p-4">
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
      </div>
    </div>
  );
}

export default SignUp;
