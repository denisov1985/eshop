import recipesReducer from './receipesReducer'
import { initialState as recipesState } from './receipesReducer'
import { combineReducers }  from 'redux'

// Combine all reducers you may have here
export default combineReducers({
    recipesState: recipesReducer,

})

export const initialStates = {
    recipesState,
};