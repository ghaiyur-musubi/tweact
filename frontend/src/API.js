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

export default class API
{
    getTweets = async () =>
    {
        const tweets = await api
            .get("/tweets/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return tweets
    }
    
    getTweet = async (id) =>
    {
        const tweet = await api
            .get("/tweets/" + id + "/")
            .then((response) => 
            {
                return response.data
            })
            .catch((error) => 
            {
                throw new Error(error)
            })
        return tweet
    }

    addTweet = async (name, body, image) =>
    {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("body", body);
        formData.append("image", image);
    }
}