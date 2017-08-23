import Action from './Action';

class CrudAction extends Action
{
    create() {
        return {
            collect:  (params) => this.getApi().sendGet('collect', {}),
            unset:    () => this.createReceiveAction('unset'),
            get: () => this.createReceiveAction('get'),
            select: (record) => this.createReceiveAction('select', record),
        }
    }
}

export default CrudAction;