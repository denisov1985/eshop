import React, {Component} from 'react'
import Layout from '../Layout/Layout';
export default class InDevelopment extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Layout
            title="In Development"
            description="The page is not ready please come back later"
        >Dashboard. In development{this.props.children}</Layout>);
    }
}