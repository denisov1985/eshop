import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';

import InputText from './elements/InputText'
import InputNumber from './elements/InputNumber'

export default class Form extends CoreComponent {

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        return (<form  className="ui form">
            {this.renderElementWithProps({
                provider: this.props.provider
            }, this.props.children)}
        </form>);
    }
}

Form.Input = {
    Text: InputText,
    Number: InputNumber,
};