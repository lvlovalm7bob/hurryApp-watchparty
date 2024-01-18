import axios from "axios";

const production = false;

const instance = axios.create({
  withCredentials: true,
  baseURL: production
    ? "https://watch-party-uvre.onrender.com/api"
    : "http://localhost:5000/api",
});

export default instance;
