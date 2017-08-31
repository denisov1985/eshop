import React, {Component} from 'react'
import Layout from '../Layout/Layout';
import DataTable from 'shared/components/DataTable/DataTable';
import MainForm from './forms/MainForm';
import { Button, Divider, Grid, Tab } from 'semantic-ui-react'
import Preload from 'shared/components/Preload/Preload';

export default class ProductView extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        const panes = [
            { menuItem: 'Information', render: () => <Tab.Pane>
                <Preload>
                    <MainForm onSaveProduct={this.props.onSaveProduct} container={this.props.container} provider={this.props.provider}/>
                </Preload>
            </Tab.Pane> },
            { menuItem: 'Attributes', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'Inventory tracking', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'Related products', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'Product reviews', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'Tabs', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'PIN Codes', render: () => <Tab.Pane>Under construction</Tab.Pane> },
            { menuItem: 'Attachmenets', render: () => <Tab.Pane>Under construction</Tab.Pane> },
        ];

        return (<Layout
            title="Product view"
            description="Manage  your  store products and related attributes">

            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Tab panes={panes} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>);
    }
}