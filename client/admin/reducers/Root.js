import { combineReducers } from 'redux'
import CollectionReducer from 'shared/reducers/CollectionReducer';

CollectionReducer.factory('products');

const rootReducer = combineReducers({
    products: CollectionReducer.factory('products')
});

export default rootReducer;