import Reducer from './Reducer';
import { fromJS, Map, List } from 'immutable';

class DetailsReducer extends Reducer
{
    handle(state, action) {
        /**
         * Unset action
         */
        this.onReceiveAction('get', (state, action) => {
            return state.set('details ', fromJS([{ololo: 'trololo'}]))
                .set('status', this.statusComplete());
        })

        this.onReceiveAction('select', (state, action) => {
            const newState = state.set('details', state.get('details', fromJS([])).push(action.payload))
                .setIn(['context', action.payload.get('id'), 'status'], this.statusComplete());
            console.log('new state');
            console.log(newState);
            return newState;
        })

        this.onReceiveAction('update', (state, action) => {
            const index = state.get('details').map((e) => {
                return e.get('id');
            }).indexOf(action.payload.get('id'));

            return state.setIn(['details', index], action.payload);
        })

        this.onRequestAction('save', (state, action) => {
            return state.setIn(['context', action.payload.id, 'status'], this.statusLoading());
        })

        this.onReceiveAction('save', (state, action) => {
            return state.setIn(['context', action.payload.request.body.id, 'status'], this.statusComplete());
        })

        return this.getHandlers();
    }
}

export default DetailsReducer;