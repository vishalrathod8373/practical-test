import axios from "axios";

const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

// const axiosApi = axios.create({
//   baseURL: REACT_APP_APP_URL,
// });
export default axios.create({
  baseURL: REACT_APP_APP_URL,
});

// axios.interceptors.request.use(function (config) {
//   return config;
// });

// axiosApi.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );

// export async function get(url, config) {
//   return await axiosApi
//     .get(url, {
//       ...config,
//     })
//     .then((response) => response.data);
// }
// export async function post(url, data, config) {
//   return await axiosApi
//     .post(url, data, {
//       ...config,
//     })
//     .then((response) => response.data);
// }