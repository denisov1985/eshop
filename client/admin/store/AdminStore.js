import { createStore, applyMiddleware, compose } from 'redux'
import {fromJS} from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers/Root'
import { initialStates } from '../reducers'

export default function configureStore(props, context) {
    let initialState = {};
    Object.keys(props.hydrated_data).map(function(objectKey, index) {
        initialState[objectKey] = fromJS({
            dataset: props.hydrated_data[objectKey]
        })
    });

    // use devtools if we are in a browser and the extension is enabled
    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunkMiddleware
        )
    );
    return store
}