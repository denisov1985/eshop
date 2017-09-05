import React, {Component} from 'react'
import CoreComponent from '../Core/CoreComponent';

export default class Row extends CoreComponent {

    render() {
        return (<div className="field">
            <label>{this.getProp('title')}</label>
            {this.props.children}
        </div>);
    }
}