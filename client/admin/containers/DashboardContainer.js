import React, {Component} from 'react'
import {Map} from 'immutable';
import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard/Dashboard';
class DashboardContainer extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Dashboard />);
    }
}

const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps)(DashboardContainer)