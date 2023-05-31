import axios from "axios";

export const api = axios.create({
    baseURL: "https://m6sp2-back.onrender.com/",
    timeout: 10000
})