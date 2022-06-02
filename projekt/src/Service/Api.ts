import axios, { AxiosInstance } from "axios";


const BASE_URL = 'https://api.thecatapi.com/v1/images';
const defaultAxiosInstance: AxiosInstance = axios.create({baseURL: BASE_URL});
export default defaultAxiosInstance;
