import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL as string;

export const api:AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 3 * 60 * 1000,
    headers: {
        "ngrok-skip-browser-warning": "69420",
    },
})