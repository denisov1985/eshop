import React, {Component} from 'react'
import CoreComponent from '../../Core/CoreComponent';
import Row from '../Row';
import {Map, List, fromJS} from 'immutable';

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

    isLoading = () => {
        if (typeof this.props.provider.context === 'undefined') {
            return 0;
        }
        return this.props.provider.context.get('status', 0) === 1;
    }

    getLoadingProp = () => {
        let loading = {};
        if (this.isLoading()) {
            loading.loading = true;
        }
        return loading;
    }

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

CoreElement.defaultProps = {
    provider: {
        data: new Map({}),
        context: new List([]),
        actions: {}
    }
};