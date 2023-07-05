import axios, { AxiosInstance } from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
