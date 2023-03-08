import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoutes";
import BlogDetail from "./Pages/BlogDetail";
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* <PrivateRoute component={Home} path="/" exact /> */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blog/:index" element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
