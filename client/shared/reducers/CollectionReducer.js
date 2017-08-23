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
            return state.setIn(['context', 'dataset', 'status'], this.statusLoading());
        })

        /**
         * Receive collect
         */
        this.onReceiveAction('collect', (state, action) => {
            return state.set('dataset', fromJS(action.payload.data))
                .setIn(['context', 'dataset', 'status'], this.statusComplete());
        })

        return this.getHandlers();
    }
}

export default CollectionReducer;