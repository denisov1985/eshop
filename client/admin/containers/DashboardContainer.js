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
        return (<Dashboard>
            <button className="ui button blue test" type="button" onClick={() => {console.log(this)}}>Some tet</button>
        </Dashboard>);
    }
}

const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps)(DashboardContainer)