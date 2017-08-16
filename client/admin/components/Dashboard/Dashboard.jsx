import React, {Component} from 'react'
import Layout from '../Layout/Layout';
import { Button, Divider, Grid } from 'semantic-ui-react'

export default class Dashboard extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Layout
            title="Dashboard"
            description="Your store dashboard page"
        ><Button onClick={this.props.onClick}>Invoke</Button>
            Dashboard. In development{this.props.children}</Layout>);
    }
}