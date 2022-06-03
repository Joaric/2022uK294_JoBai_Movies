import axios, { AxiosInstance } from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1/images';
const API: AxiosInstance = axios.create({baseURL: BASE_URL});
export default API;

// const BASE_URL = "http://localhost:3030/";

// export const API: AxiosInstance = axios.create({
//   baseURL: BASE_URL,
// });


// axios.interceptors.request.use(
//   (request: any) => {
//       request.headers=['Authorization'] => BearerToken
//   }
//   (err: any) => {

//   }

// axios.interceptors.response.use(
//   (response: any) => {

//   }
// )