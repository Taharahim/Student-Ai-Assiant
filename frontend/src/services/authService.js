import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const registerUser = async (data) => {
  return await axios.post(`${API}/register`, data);
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API}/login`, data);

  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");