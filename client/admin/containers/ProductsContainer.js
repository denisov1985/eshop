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
        this.props.actions.product.collect();
    };

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        console.log(this);
        return (<Products
            container={this}
            onFindProducts={this.findProducts}
        />);
    }
    static mapStateToProps = (state, ownProps) => {
        console.log('TEST');
        console.log(state);
        return {
            product: state.product
        }
    }

    static mapDispatchToProps = (dispatch) => ({
        product: bindActionCreators(new CollectionAction('product').create(), dispatch)
    })

}

export default ProductsContainer.connect();