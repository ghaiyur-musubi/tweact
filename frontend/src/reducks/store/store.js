import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from 'redux-thunk';

import { TweetsReducer } from '../tweets/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            tweets: TweetsReducer,
        }),

        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        )
    )
}