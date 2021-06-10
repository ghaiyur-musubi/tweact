import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION")
{
    baseURL = process.env.REACT_APP_ENVIRONMENT;
}
else
{
    baseURL = "https://127.0.0.1:8000";
}

const api = axios.create
    ({
        baseURL: baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });