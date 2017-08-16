import {fromJS} from 'immutable';
import CollectionReducer from './CollectionReducer';

export default class ReducerFactory {

    constructor(entity) {
        this.entity = entity;
    }

    /**
     * Create reducer
     * @param initialState
     * @param handlers
     * @returns {reducer}
     */
    createReducer(initialState, handlers) {
        return function reducer(state = initialState, action) {
            console.log(action)
            if (handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action)
            } else {
                return state
            }
        }
    }

    /**
     * Create handlers
     * @returns {reducer}
     */
    createHandlers(initialState) {
        return this.createReducer(fromJS(initialState), {
            ...CollectionReducer.create(this.entity)
        })
    }

    /**
     * Create reducers
     * @param entity
     * @returns {reducer}
     */
    static create(entity, initialState) {
        if (typeof initialState === 'undefined') {
            initialState = {};
        }
        const  instance = new ReducerFactory(entity);
        return instance.createHandlers(initialState);
    }

    userDetails =(state, action) => {
        console.log('ololo');
        return 'trololo';
    }
}