import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AuthContext from "../context/AuthContext";
function BlogDetail({ props }) {
  const { index, title } = useParams(); // extract the id parameter from the URL
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/blog/${index}/`)
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [index]);
  return (
    <div className="m-auto">
      <NavBar />
      <div className="max-w-7xl m-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
        <p className="mt-2 text-gray-600">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
