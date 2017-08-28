import React, {Component} from 'react'
import {Map, List, fromJS} from 'immutable';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import ProductView from '../components/ProductView/ProductView';
import Container from 'shared/containers/Container';
import CrudAction from 'shared/actions/CrudAction';

class ProductViewContainer extends Container {

    componentWillMount() {
        this.initFromProviderById(this.getParam('id'), 'product');
    }

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<ProductView
            provider={this.getDataProvider(this.getParam('id'), 'product')}
            container={this}
        />);
    }

    static mapDispatchToProps = (dispatch) => ({
        product: bindActionCreators(new CrudAction('product').create(), dispatch)
    })

    static mapStateToProps = (state, ownProps) => {
        return {
            product: state.product
        }
    };
}

export default ProductViewContainer.connect();