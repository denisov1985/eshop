import React, {Component} from 'react'
import CoreComponent from '../../Core/CoreComponent';
import Row from '../Row';

export default class CoreElement extends CoreComponent {

    updateValue = (value) => {
        this.props.provider.actions.update(
            this.props.provider.data.set(this.props.field, value)
        );
    }

    onChange = (e) => {
        this.updateValue(e.target.value);
    };

    getValue = (props) => {
        if (typeof props === 'undefined') {
            props = this.props;
        }
        return props.provider.data.get(this.props.field);
    };

    /**
     * Render dimmer
     * @returns {XML}
     */
    render() {
        return (<Row {...this.props}>
            {this.build()}
        </Row>);
    }


}