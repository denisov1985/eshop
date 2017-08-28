import React, {Component} from 'react'
import CoreComponent from '../../Core/CoreComponent';
import Row from '../Row';

export default class CoreElement extends CoreComponent {

    onChange = (e) => {
        this.props.provider.actions.update(
            this.props.provider.data.set(this.props.field, e.target.value)
        );
    };

    getValue = () => {
        return this.props.provider.data.get(this.props.field);
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