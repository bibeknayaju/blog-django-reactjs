import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/allblogs/").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      {data.map((item) => (
        <Hero
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Home;
