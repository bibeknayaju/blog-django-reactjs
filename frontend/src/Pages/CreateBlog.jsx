import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import axios from "axios";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/createblog/", {
        title: title,
        description: description,
      })
      .then((response) => {
        console.log("Data Sent:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <NavBar />
      <div className="m-auto flex max-w-7xl">
        <form method="POST">
          <div className="mt-5 m-auto justify-center items-center flex flex-col max-w-7xl">
            <h1>Create New Blog</h1>
            <h1 className="text-black font-Montserrat font-semibold text-4xl text-center mb-5">
              Title
            </h1>
            <input
              value={title}
              onChange={handleTitleChange}
              type="text"
              name="title"
            />
          </div>
          <div>
            <h1>Description</h1>
            <textarea
              onChange={handleDescriptionChange}
              value={description}
              type="text"
              name="description"
            />
          </div>

          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
