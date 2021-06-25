import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION")
{
    baseURL = process.env.REACT_APP_ENVIRONMENT;
}
else
{
    baseURL = "https://tweact-api.herokuapp.com";
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
        const savedTweet = await api
            .post("/tweets/add/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedTweet
    }

    updateTweet = async (id, name, body, image) =>
    {
        const formData = new formData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("body", body);
        formData.append("image", image);
        const updatedTweet = await api
            .put("/tweets/" + id + "/", formData)
            .then((response) => 
            {
                return response.data
            })
            .catch((error) => 
            {
                throw new Error(error)
            })
        return updatedTweet
    }

    deleteTweet = async (id) =>
    {
        const response = await api
            .delete("/tweets/delete/" + id + "/")
            .then((response) =>
            {
                return response.data
            })
            .catch((error) => 
            {
                throw new Error(error)
            })
        return response
    }
    likeAddTweet = async (id) => {
        const tweet = await api
            .get("/tweets/likes/add/" + id + "/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return tweet
    }
    likeSubtractTweet = async (id) => {
        const tweet = await api
            .get("/tweets/likes/subtract/" + id + "/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return tweet
    }
}