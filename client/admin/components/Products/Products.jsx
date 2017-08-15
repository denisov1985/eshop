import React, {Component} from 'react'
import Layout from '../Layout/Layout';
import DataTable from 'shared/components/DataTable/DataTable';
import { Button, Divider, Grid } from 'semantic-ui-react'

export default class Products extends Component {

    /**
     * Render menu
     * @returns {XML}
     */
    render() {
        let { product } = this.props.container.props;

        return (<Layout
            title="Products"
            description="Manage  your  store products and related attributes">

            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Button onClick={this.props.onFindProducts}>Find products</Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <DataTable provider={product.collection}>
                            <DataTable.Column.Data width="40" title="ID" field="id" sortable={true}/>
                            <DataTable.Column.Data title="Product Name" field="name" sortable={true}/>
                            <DataTable.Column.Text title="Static">
                                Some text
                            </DataTable.Column.Text>
                            <DataTable.Column.Control width="50">
                                <DataTable.Control.Button fluid onClick={this.props.onEditProduct}>Edit</DataTable.Control.Button>
                            </DataTable.Column.Control>
                        </DataTable>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>);
    }
}