import API from "../../API";
import { fetchTweetsAction, addTweeAction, deleteTweetAction } from "./actions";
import { push } from "connected-react-router";

const api = new API();

export const fetchTweets = () => {
    return async (dispatch) => {
        return api.getTweets()
            .then((tweets) => {
                dispatch(fetchTweetsAction(tweets))
            }).catch((error) => {
                alert("Failes to connect to API : /tweets/")
            })
    }
}