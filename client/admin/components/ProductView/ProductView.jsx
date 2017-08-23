import React, {Component} from 'react'
import Layout from '../Layout/Layout';
import DataTable from 'shared/components/DataTable/DataTable';
import { Button, Divider, Grid, Tab } from 'semantic-ui-react'

export default class ProductView extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>{this.props.provider.get('name', 'lalal')}</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ];

        let { product } = this.props.container.props;

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