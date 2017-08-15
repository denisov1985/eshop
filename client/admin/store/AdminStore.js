import { createStore, applyMiddleware, compose } from 'redux'
import {fromJS} from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers/Root'
import { initialStates } from '../reducers'

export default function configureStore(props, context) {

    // This is how we get initial props from Symfony into redux.
    const { recipes, recipe } = props
    const { base, location } = context
    const { recipesState } = initialStates


    // Redux expects to initialize the store using an Object
    const initialState = {
        product: fromJS({
            status: 2,
            dataset: props.hydrated_data.product,
            page: {
                offset: 1,
                limit:  10,
                total:  0
            },
            sort: {
                field: null,
                order: 'asc'
            },
            filter: []
        })
    };

    console.log(initialState);

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