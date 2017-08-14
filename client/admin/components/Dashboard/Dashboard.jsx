import React, {Component} from 'react'
import Layout from '../Layout/Layout';
export default class Dashboard extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Layout
            title="Dashboard"
            description="Your store dashboard page"
        >Dashboard. In development{this.props.children}</Layout>);
    }
}