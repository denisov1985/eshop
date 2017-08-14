import React, {Component} from 'react'
import Layout from '../Layout/Layout';
import DataTable from 'shared/DataTable/DataTable';
import { Button, Divider, Grid } from 'semantic-ui-react'


export default class Products extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        return (<Layout
            title="Products"
            description="Manage your store products and related attributes">

            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Button>Find products</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <DataTable/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>);
    }
}