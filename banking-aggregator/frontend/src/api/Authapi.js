import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7248/api/Auth",
  headers: {
    "Content-Type": "application/json",
  },
});

 