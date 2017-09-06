import Action from './Action';

class CrudAction extends Action
{
    create() {
        return {
            collect:  (params) => this.getApi().sendGet('collect', {}),
            save:     (data) => this.getApi().sendPost('save', data.toJS()),
            unset:    () => this.createReceiveAction('unset'),
            get: () => this.createReceiveAction('get'),
            select: (record) => this.createReceiveAction('select', record),
            update: (record) => this.createReceiveAction('update', record),
            uploadImage: (image, entity) => this.getApi().sendPost('upload_image', {
                image: image,
                entity: entity
            }),
        }
    }
}

export default CrudAction;