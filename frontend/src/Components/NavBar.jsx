import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function NavBar() {
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };

  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

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

          {/* <div className="hidden gap-2 md:flex items-center justify-center">
            <Link to="/login">
              <button className="text-xl font-semibold">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600	 p-4">
                Sign Up
              </button>
            </Link>
          </div> */}
          <div>
            <Link to="/login">
              <button
                className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600 pt-4 pb-4 pl-5 pr-5"
                // onClick={openModal}
              >
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-white-600 pt-4 pb-4 pl-5 pr-5">
                Sign Up
              </button>
            </Link>
          </div>

          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Login Modal">
            <div className="flex flex-col justify-center items-center w-72">
              <h2 className="mb-5 font-Poppins text-lg font-semibold">Login</h2>
              <form method="POST">
                <div>
                  <h3>Username</h3>
                  <input
                    type="text"
                    className="outline-none border-2 border-gray-300 pl-3 pr-3 rounded-lg"
                    placeholder="Enter your username..."
                  />
                </div>
                <div>
                  <h3>Password</h3>
                  <input
                    type="password"
                    className="outline-none border-2 border-gray-300 pl-3 pr-3 rounded-lg"
                    placeholder="Enter your username..."
                  />
                </div>
                <button className="text-xl font-semibold border-2 rounded-lg mt-5 border-orange-400 pt-2 pb-2 pl-5 pr-5">
                  Login
                </button>
              </form>
            </div>
          </Modal> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
