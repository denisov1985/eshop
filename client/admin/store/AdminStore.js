import { createStore, applyMiddleware, compose } from 'redux'
import {fromJS} from 'immutable';
import thunkMiddleware from 'redux-thunk'
//import reducers from '../reducers/Root'
import { combineReducers } from 'redux'
import CollectionReducer from 'shared/reducers/CollectionReducer';
import ReducerFactory from 'shared/reducers/ReducerFactory';

export default function configureStore(props, context) {
    let initialState = {};
    // use devtools if we are in a browser and the extension is enabled
    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const rootReducer = combineReducers({
        product: ReducerFactory.create('product', fromJS(props.hydrated_data.product))
    });


    const store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware
        )
    );
    return store
}