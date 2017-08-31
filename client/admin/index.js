if (typeof window !== 'undefined') {
    window.server = true;
}

import ReactOnRails from 'react-on-rails';
import rootReducer from './reducers/Root';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk'
import RootContainer from './containers/RootContainer'
import configureStore from './store/AdminStore'
const store = configureStore

ReactOnRails.registerStore({ store })
ReactOnRails.register({ RootContainer });