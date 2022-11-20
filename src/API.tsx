import axios from "axios";

export const API = axios.create({
    baseURL: "http://192.168.119.42:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Alllow-Credentials": true,
    },
    withCredentials: true,
})