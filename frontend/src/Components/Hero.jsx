import React from "react";
import { Link } from "react-router-dom";
function Hero({ id, title, description }) {
  return (
    <div key={id} className=" flex m-auto max-w-7xl mb-5">
      <div className="p-8 flex-col max-w-7xl w-full  shadow-md text-black mt-5 rounded-lg bg-slate-100">
        <h1 className="font-Poppins mb-4 text-5xl font-semibold">{title}</h1>
        <p className="font-Montserrat ">{description}</p>

        <Link to={`/blog/${id}`}>
          <button className="mt-5 text-xl font-semibold border-2 rounded-lg border-orange-900 uppercase	 p-4">
            read me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
