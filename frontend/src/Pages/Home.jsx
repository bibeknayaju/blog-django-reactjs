import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import AuthContext from "../context/AuthContext";

function Home() {
  const [data, setData] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getBlogs();
  }, []);

  let getBlogs = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/blogs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setData(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };
  return (
    <div>
      <ul>
        {data.map((item) => (
          <Hero
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
