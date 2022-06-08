import axios, { AxiosInstance } from "axios";

// const BASE_URL = 'https://api.thecatapi.com/v1/images';
const BASE_URL = "http://localhost:3030/";
const API: AxiosInstance = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(
  (request: any) => {
    const token: string | null = localStorage.getItem("api_token");
    request.headers["Authorization"] = `Bearer ${token}`;
    return request;
  },
  (error) => Promise.reject(error)
);
API.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    const statCode = error.response.status;
    if (statCode == 401 || statCode == 403) {
      localStorage.removeItem("api_token");
      window.location.href = "/login"; //TODO: do this better....
    }
    throw error;
  }
);

export default API;
