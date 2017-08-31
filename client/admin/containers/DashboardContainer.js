import React, {Component} from 'react'
import {Map, fromJS} from 'immutable';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard/Dashboard';
import CollectionAction from 'shared/actions/CrudAction';
class DashboardContainer extends Component {

    onClick = () => {
        this.props.actions.product.getLocal();
    }

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Dashboard onClick={this.onClick} />);
    }
}

const mapStateToProps = (state) => {
    return {state};
}

const mapDispatchToProps = (dispatch) => ({
    actions: {
        product: bindActionCreators(new CollectionAction('product').create(), dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)