import React, {Component} from 'react'
import CoreComponent from '../../Core/CoreComponent';
import { Button } from 'semantic-ui-react'

export default class DataButton extends CoreComponent {

    onClick = () => {
        this.props.onClick(this.props.record)
    }

    render() {
        let props = {...this.props};
        delete props.record;
        return (<Button {...props} onClick={this.onClick} />);
    }
}
