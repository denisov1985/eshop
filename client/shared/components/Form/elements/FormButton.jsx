import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Button } from 'semantic-ui-react'

export default class FormButton extends CoreElement {

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        let {provider, ...props} = this.props;
        return (<Button {...props} {...this.getLoadingProp()} />);
    }


}