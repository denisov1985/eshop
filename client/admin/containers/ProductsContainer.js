import React, {Component} from 'react'
import {Map} from 'immutable';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Products from '../components/Products/Products';
import Container from 'shared/containers/Container';
import CollectionAction from 'shared/actions/CollectionAction';

class ProductsContainer extends Container {

    /**
     * Find all products
     */
    findProducts = () => {
        this.props.actions.products.findAll();
    };

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Products onFindProducts={this.findProducts} />);
    }
    static mapStateToProps = (state, ownProps) => ({
        products: state.products,
    })

    static mapDispatchToProps = (dispatch) => ({
        products: bindActionCreators(new CollectionAction('product').create(), dispatch)
    })

}

export default ProductsContainer.connect();