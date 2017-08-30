import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Button } from 'semantic-ui-react'

export default class FormButton extends CoreElement {

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        console.log('IS LOADING')
        console.log(this.getLoadingProp())
        return (<Button {...this.props} {...this.getLoadingProp()} />);
    }


}