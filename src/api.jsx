import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3000",
// });

const api = axios.create({
  baseURL: import.meta.env.VITE_BEURL,
});


export default api;


