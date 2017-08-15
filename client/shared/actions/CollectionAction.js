import Action from './Action';

class CollectionAction extends Action
{
    create() {
        return {
            collect: (params) => this.getApi().sendGet('collect', {}),
            unset: () => this.createReceiveAction('unset'),
        }
    }
}

export default CollectionAction;