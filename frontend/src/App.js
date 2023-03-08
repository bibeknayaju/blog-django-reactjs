import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoutes";
function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <NavBar />
          {/* <PrivateRoute component={Home} path="/" exact /> */}
          <Route component={Home} path="/" />
          <Route component={Login} path="/login" />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
