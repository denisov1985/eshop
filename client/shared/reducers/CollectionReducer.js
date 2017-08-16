import Reducer from './Reducer';
import { fromJS, Map, List } from 'immutable';

class CollectionReducer extends Reducer
{
    handle(state, action) {
        /**
         * Unset action
         */
        this.onReceiveAction('unset', (state, action) => {
            return state.set('dataset', fromJS([]))
                .set('status', this.statusComplete());
        })

        /**
         * Request collect
         */
        this.onRequestAction('collect', (state, action) => {
            return state.set('status', this.statusLoading());
        })

        /**
         * Receive collect
         */
        this.onReceiveAction('collect', (state, action) => {
            return state.set('dataset', fromJS(action.payload.data))
                .set('status', this.statusComplete());
        })

        return this.getHandlers();
    }
}

export default CollectionReducer;