import axios from "axios";
import { setUser, clearUser } from "./userSlice";

export function login(username, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      const userResponse = await axios.get("http://localhost:8000/api/login/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = userResponse.data;
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadUser() {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(clearUser());
      return;
    }
    try {
      const response = await axios.get("your-backend-url/api/user/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = response.data;
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
      dispatch(clearUser());
    }
  };
}

export function logout() {
  return function (dispatch) {
    localStorage.removeItem("token");
    dispatch(clearUser());
  };
}
