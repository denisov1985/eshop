import { combineReducers } from 'redux'
import CollectionReducer from 'shared/reducers/CollectionReducer';

const rootReducer = combineReducers({
    product: CollectionReducer.factory('product')
});

export default rootReducer;