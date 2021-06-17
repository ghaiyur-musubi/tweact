import * as Actions from './actions';
import initialState from '../store/initalState';

export const TweetsReducer = (state = initialState.tweets, action) => {
    switch (action.type) {
        case Actions.ADD_TWEET:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_TWEET:
            return {
                ...state,
                list:action.payload
            }
        case Actions.DELETE_TWEET:
            return {
                ...state,
                list:action.payload
            }
        default:
            return state
    }
}