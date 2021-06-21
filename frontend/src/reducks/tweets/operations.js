import API from "../../API";
import { fetchTweetsAction, addTweetAction, deleteTweetAction } from "./actions";
import { push } from "connected-react-router";

const api = new API();


// Fetching tweets from the API
export const fetchTweets = () => {
    return async (dispatch) => {
        return api.getTweets()
            .then((tweets) => {
                dispatch(fetchTweetsAction(tweets))
            }).catch((error) => {
                alert("Failed to connect to API : /tweets/")
            })
    }
}

// Delete a particular tweet 

export const deleteTweet = (id) => {
    return async (dispatch, getState) => {
        return api.deleteTweet(id)
            .then((response) => {
                const prevTweets = getState().tweets.list
                const nextTweets = prevTweets.filter(tweet => tweet.id !== id)
                dispatch(deleteTweetAction(nextTweets))
            }).catch((error) => {
                alert("Failed to connect to API to Delete a Tweet")
                console.log(error);
            })
    }
}

// Add a tweet to the db 

export const addTweet = (name, body, image) => {
    return async (dispatch, getState) => {
        // Validation conditions
        if (name === "" || body === "") {
            alert("Please fill out name and body")
            return false
        }
        return api.addTweet(name, body, image)
            .then((tweet) => {
                const prevTweets = getState().tweets.list
                const nextTweets = [tweet, ...prevTweets]
                dispatch(addTweetAction(nextTweets))
            }).catch((error) => {
                alert("Failed to connect API to add a tweet")
                console.log(error);
            })
    }
}

// Update an existing tweet 

export const updateTweet = (id, name, body, image) => {
    return async (dispatch) => {
        // Validation 
        if (id === "" || name === "" || body === "") {
            alert("Please fill out id , name ,and body")
            return false
        }
        return api.updateTweet(id, name, body, image)
            .then((tweet) => {
                dispatch(push("/"))
            }).catch((error) => {
                alert("Failed to connect to API to update the tweet")
                console.log(error);
            })
    }
}