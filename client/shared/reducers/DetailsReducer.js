import Reducer from './Reducer';
import { fromJS, Map, List } from 'immutable';

class DetailsReducer extends Reducer
{
    handle(state, action) {
        /**
         * Unset action
         */
        this.onReceiveAction('get ', (state, action) => {
            return state.set('details ', fromJS([{ololo: 'trololo'}]))
                .set('status', this.statusComplete());
        })

        return this.getHandlers();
    }
}

export default DetailsReducer;``