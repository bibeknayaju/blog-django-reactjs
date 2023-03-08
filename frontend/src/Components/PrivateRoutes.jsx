// import { Navigate, Route, Routes } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   const { user } = useContext(AuthContext);
//   return user ? (
//     <Routes>
//       <Route {...rest} element={children} />
//     </Routes>
//   ) : (
//     <Navigate to="/login" replace={true} />
//   );
// };
// export default PrivateRoute;

import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext();
  return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;
};

export default PrivateRoute;
