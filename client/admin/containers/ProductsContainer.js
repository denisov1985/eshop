import React, {Component} from 'react'
import {Map} from 'immutable';
import Products from '../components/Products/Products';
export default class ProductsContainer extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Products/>);
    }
}