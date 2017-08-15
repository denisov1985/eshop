import { createStore, applyMiddleware, compose } from 'redux'
import {fromJS} from 'immutable';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers/Root'

export default function configureStore(props, context) {
    let initialState = {};
    console.log(props.hydrated_data);
    Object.keys(props.hydrated_data).map(function(objectKey, index) {
        initialState[objectKey] = {};
        Object.keys(props.hydrated_data[objectKey]).map(function(objectSubKey, subIndex) {
            initialState[objectKey] = fromJS({
                dataset: props.hydrated_data[objectKey][objectSubKey],
                status:  2
            });
        });
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