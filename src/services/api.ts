import axios from "axios";

export const api = axios.create({
    baseURL: "https://m6sp2-back.onrender.com/",
    timeout: 50000
})

export const checkApi = axios.create({
  baseURL: "https://m6sp2-back.onrender.com/",
  timeout: 500000
})