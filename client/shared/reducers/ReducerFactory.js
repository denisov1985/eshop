import {fromJS} from 'immutable';

export default class ReducerFactory {

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
            'RECEIVE_PRODUCT_UNSET': this.userDetails
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
        const instance = new ReducerFactory(entity);
        return instance.createHandlers(initialState);
    }

    userDetails =(state, action) => {
        console.log('ololo');
        return 'trololo';
    }
}