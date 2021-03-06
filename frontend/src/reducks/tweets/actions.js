// Add the tweet action 
export const ADD_TWEET = "ADD_TWEET";
export const addTweetAction = (tweets) => {
    return {
        type: "ADD_TWEET",
        payload: tweets
    }
}

// Fetch the tweet actions 
export const FETCH_TWEET = "FETCH_TWEET";
export const fetchTweetsAction = (tweets) => {
    return {
        type: "FETCH_TWEET",
        payload: tweets
    }
}

// Delete tweet actions
export const DELETE_TWEET = "DELETE_TWEET";
export const deleteTweetAction = (tweets) => {
    return {
        type: "DELETE_TWEET",
        payload: tweets
    }
}