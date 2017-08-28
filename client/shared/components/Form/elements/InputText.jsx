import React, {Component} from 'react'
import CoreElement from './CoreElement';
import { Input } from 'semantic-ui-react'

export default class InputText extends CoreElement {

    /**
     * Render dimmer
     * @returns {XML}
     */
    build() {
        return (<Input onChange={this.onChange} value={this.getValue()}/>);
    }


}